package com.unclejack.spring.jpa.model;

import java.math.BigDecimal;

public class CreateItemRequest {
    public String name;
    public Category category;
    public BigDecimal price;
    public Integer stock;

    public CreateItemRequest(String name, Category category, BigDecimal price, Integer stock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}