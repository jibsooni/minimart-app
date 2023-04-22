package com.unclejack.spring.jpa.model;

import java.math.BigDecimal;

public class CreateItemRequest {
    public Category category;
    public BigDecimal price;
    public String name;
    public Integer stock;
}