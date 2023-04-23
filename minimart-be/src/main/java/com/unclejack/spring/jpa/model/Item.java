package com.unclejack.spring.jpa.model;

import java.math.BigDecimal;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Entity
public class Item {

    @Transient
    Logger logger = LoggerFactory.getLogger(Item.class);

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pk_itemid")
    private Long id;
    @NotNull
    private Category category;
    @NotNull
    private BigDecimal price;
    @NotNull
    private String name;
    @NotNull
    private Integer stock;

    public Item(Category category, BigDecimal price, String name, Integer stock) {
        this.category = category;
        this.price = price;
        this.name = name;
        this.stock = stock;
    }
    
    public Item() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category category) {
        this.category = category;
    }
    public BigDecimal getPrice() {
        return price;
    }
    public void setPrice(BigDecimal price) {
        this.price = price;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getStock() {
        return stock;
    }
    public void setStock(Integer stock) {
        this.stock = stock;
    }

}
