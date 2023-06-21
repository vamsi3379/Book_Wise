# Use the official OpenJDK base image with Java 17
FROM openjdk:17-oracle

# Set the working directory in the container
WORKDIR /usr/src/server

# Copy the packaged JAR file into the container
COPY target/spring-boot-library-0.0.1-SNAPSHOT.jar  app.jar

# Expose the port that your Spring Boot application listens on (if necessary)
EXPOSE 8080

# Set the entry point command to run your Spring Boot application
CMD ["java", "-jar", "app.jar"]
