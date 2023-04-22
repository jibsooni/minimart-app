package com.unclejack.spring.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unclejack.spring.jpa.model.BadRequestException;
import com.unclejack.spring.jpa.model.Category;
import com.unclejack.spring.jpa.model.CreateItemRequest;
import com.unclejack.spring.jpa.model.CreateUserRequest;
import com.unclejack.spring.jpa.model.Item;
import com.unclejack.spring.jpa.model.LoginRequest;
import com.unclejack.spring.jpa.model.Role;
import com.unclejack.spring.jpa.model.User;
import com.unclejack.spring.jpa.model.UserResponse;
import com.unclejack.spring.jpa.repository.ItemRepository;
import com.unclejack.spring.jpa.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class MinimartService {
    Logger logger = LoggerFactory.getLogger(MinimartService.class);

    @Autowired
    UserRepository userRepository;

    @Autowired
    ItemRepository itemRepository;

    @PostConstruct
    public void init() {
        if (getUser("unclejack") == null) {
            createUser(new CreateUserRequest("unclejack", "unclejack123", Role.Administrator));
        }
        if (getUser("xiaoming") == null) {
            createUser(new CreateUserRequest("xiaoming", "xiaoming123", Role.User));
        }
    }

    public User createUser(CreateUserRequest req) {
        User user = new User(req.username, req.password, req.role);
        userRepository.save(user);
        return user;
    }

    public User getUser(String username) {
        Optional<User> op = userRepository.findByUsername(username);
        if (op.isPresent()) {
            return op.get();
        }
        return null;
    }

    public UserResponse loginUser(LoginRequest req) {
        Optional<User> op = userRepository.findByUsernameAndPassword(req.username, req.password);
        if (op.isPresent()) {
            UserResponse res = new UserResponse(op.get());
            return res;
        }
        return null;
    }

    public Item createItem(CreateItemRequest req) {
        if (itemRepository.findByName(req.name).isPresent()) {
            throw new BadRequestException("item with name: " + req.name + " already exists");  
        }
        Item item = new Item(req.category, req.price, req.name, req.stock);
        itemRepository.save(item);
        return item;
    }

    public List<Item> getAllItems() {
        List<Item> items = itemRepository.findAll();
        return items;
    }

    public List<Item> getAllItemsByCategory(Category category) {
        List<Item> items = itemRepository.findAllByCategory(category);
        return items;
    }

    public Item getItemByName(String name) {
        Optional<Item> op = itemRepository.findByName(name);
        if (op.isPresent()) {
            return op.get();
        }
        return null;
    }

    public Item updateItem(CreateItemRequest req) {
        Optional<Item> op = itemRepository.findByName(req.name);
        if (op.isEmpty()) {
            throw new BadRequestException("item with name: " + req.name + " not found");  
        }
        Item item = op.get();
        item.setCategory(req.category);
        item.setPrice(req.price);
        item.setStock(req.stock);
        itemRepository.save(item);

        return item;
    }

    public Boolean deleteItem(String name) {
        Optional<Item> op = itemRepository.findByName(name);
        if (op.isEmpty()) {
            throw new BadRequestException("item with name: " + name + " not found");  
        }
        itemRepository.delete(op.get());
        return true;
    }


}
