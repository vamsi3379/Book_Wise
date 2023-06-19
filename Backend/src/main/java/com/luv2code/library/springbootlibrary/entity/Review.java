package com.luv2code.library.springbootlibrary.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import javax.persistence.*;
import java.util.Date;

@Entity  //JPA entity, meaning it can be mapped to a database table
@Table(name="review")  //name of the database table that this entity maps
@Data  //generates boilerplate code for getter and setter methods, as well as other common methods like equals and hashCode
public class Review {

    @Id  //This annotation specifies that the id field is the primary key for this entity.
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //how the primary key value should be generated. In this case, it uses the IDENTITY strategy, which relies on an auto-incrementing column in the database
    @Column(name="id")  //id field maps to a database column called "id".
    private Long id;

    @Column(name="user_email")
    private String userEmail;

    @Column(name="date")
    @CreationTimestamp
    private Date date;

    @Column(name="rating")
    private double rating;

    @Column(name="book_id")
    private Long bookId;

    @Column(name = "review_description")
    private String reviewDescription;
}
