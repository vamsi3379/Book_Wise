package com.luv2code.library.springbootlibrary.config;

import com.luv2code.library.springbootlibrary.entity.Book;
import com.luv2code.library.springbootlibrary.entity.Message;
import com.luv2code.library.springbootlibrary.entity.Review;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    // private String theAllowOrigin = "https://localhost:3000"; //allowing frontend
    // string port
    private String theAllowOrigin = "*";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsuportedActions = {
                HttpMethod.POST,
                HttpMethod.PATCH,
                HttpMethod.DELETE,
                HttpMethod.PUT
        };

        config.exposeIdsFor(Book.class); // gives ID'S for the get request as well in return data
        config.exposeIdsFor(Review.class);
        config.exposeIdsFor(Message.class);

        disableHttpMethods(Book.class, config, theUnsuportedActions);
        disableHttpMethods(Review.class, config, theUnsuportedActions);
        disableHttpMethods(Message.class, config, theUnsuportedActions);

        /* Configure CORS Mapping */
        cors.addMapping(config.getBasePath() + "/**") // This line configures the mapping for which CORS should be
                                                      // applied. cors is a CorsRegistry object that is used to register
                                                      // mappings for CORS configuration. config.getBasePath() retrieves
                                                      // the base path of the application, and "/**" maps the
                                                      // configuration to all endpoints under the base path.
                .allowedOrigins(theAllowOrigin); // allowing frontend string port
    }

    private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config,
            HttpMethod[] theUnsuportedActions) {
        config.getExposureConfiguration() // This retrieves the default configuration for domain object exposure in
                                          // Spring Data REST
                .forDomainType(theClass) // This sets the domain type for which the configuration will be applied. The
                                         // theClass argument is the class representing the domain object.
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsuportedActions))) // This method
                                                                                                         // is used to
                                                                                                         // configure
                                                                                                         // the exposure
                                                                                                         // of an
                                                                                                         // individual
                                                                                                         // item of the
                                                                                                         // domain type.
                                                                                                         // It takes a
                                                                                                         // lambda
                                                                                                         // expression
                                                                                                         // that is used
                                                                                                         // to configure
                                                                                                         // the
                                                                                                         // exposure.
                                                                                                         // The metadata
                                                                                                         // argument is
                                                                                                         // a
                                                                                                         // PersistentEntityResourceMetadata
                                                                                                         // object that
                                                                                                         // contains
                                                                                                         // metadata
                                                                                                         // about the
                                                                                                         // domain type,
                                                                                                         // and the
                                                                                                         // httpMethods
                                                                                                         // argument is
                                                                                                         // a
                                                                                                         // HttpMethods
                                                                                                         // object that
                                                                                                         // can be used
                                                                                                         // to disable
                                                                                                         // HTTP methods
                                                                                                         // for the item
                                                                                                         // endpoint.
                                                                                                         // The
                                                                                                         // theUnsuportedActions
                                                                                                         // argument is
                                                                                                         // an array of
                                                                                                         // HttpMethod
                                                                                                         // objects
                                                                                                         // representing
                                                                                                         // the HTTP
                                                                                                         // methods that
                                                                                                         // should be
                                                                                                         // disabled for
                                                                                                         // the item
                                                                                                         // endpoint.
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsuportedActions))); // similar
                                                                                                                // to
                                                                                                                // top
                                                                                                                // but
                                                                                                                // it
                                                                                                                // configures
                                                                                                                // the
                                                                                                                // exposure
                                                                                                                // of a
                                                                                                                // collection
                                                                                                                // of
                                                                                                                // items
                                                                                                                // of
                                                                                                                // the
                                                                                                                // domain
                                                                                                                // type.
        // .withAssociationExposure(((metdata, httpMethods) ->
        // httpMethods.disable(theUnsuportedActions))); //This method is used to
        // configure the exposure of an association between two domain types. The
        // metadata argument is a PersistentEntityResourceMetadata object representing
        // the metadata for the domain type that has the association, and the
        // httpMethods argument is a HttpMethods object representing the HTTP methods
        // that are supported for the association endpoint.
    }
}
