package com.unclejack.spring.jpa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unclejack.spring.jpa.model.Category;
import com.unclejack.spring.jpa.model.Item;

public interface ItemRepository  extends JpaRepository <Item, Long>{
    Optional<Item> findByName(String name);
    List<Item> findAllByCategory(Category category);
}