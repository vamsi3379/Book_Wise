package com.luv2code.library.springbootlibrary.dao;

import com.luv2code.library.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
