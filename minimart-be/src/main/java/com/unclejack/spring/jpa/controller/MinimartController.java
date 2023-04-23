package com.unclejack.spring.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.unclejack.spring.jpa.model.Category;
import com.unclejack.spring.jpa.model.CreateItemRequest;
import com.unclejack.spring.jpa.model.CreateUserRequest;
import com.unclejack.spring.jpa.model.Item;
import com.unclejack.spring.jpa.model.LoginRequest;
import com.unclejack.spring.jpa.model.SuccessResponse;
import com.unclejack.spring.jpa.model.UserResponse;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "http://localhost:8081")
// @CrossOrigin(origins = "*")
@RestController
public class MinimartController {
    Logger logger = LoggerFactory.getLogger(MinimartController.class);
    
    @Autowired
    MinimartService service;

    @PostMapping("/item")
    public Item createItem(@RequestBody CreateItemRequest item) {
        return service.createItem(item);
    }

    @PutMapping("/item")
    public Item updateItem(@RequestBody CreateItemRequest item) {
        return service.updateItem(item);
    }

    @GetMapping("/items")
    public List<Item> getAllItems() {
        return service.getAllItems();
    }

    @GetMapping("/items/{category}")
    public List<Item> getAllItemsByCategory(@PathVariable("category") Category category) {
        return service.getAllItemsByCategory(category);
    }

    @GetMapping("/item/{name}")
    public Item getItemByName(@PathVariable("name") String name) {
        return service.getItemByName(name);
    }

    @DeleteMapping("/item/{name}")
    public SuccessResponse deleteItem(@PathVariable("name") String name) {
        if (service.deleteItem(name)) {
            logger.info("delete success: " + name);
            return new SuccessResponse(true, "OK");
        } else {
            logger.error("delete failed: " + name);
            return new SuccessResponse(false, "Error");
        }
    }
    
    @PostMapping("/login")
    public UserResponse getUser(@RequestBody LoginRequest req) {
        return service.loginUser(req);
    }

    @PostMapping("/user")
    public UserResponse createUser(@RequestBody CreateUserRequest user) {
        return service.createUser(user);
    }

}