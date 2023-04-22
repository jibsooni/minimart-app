package com.unclejack.spring.jpa.model;

public enum Category {
    Snacks(0),
    Vegetables(1),
    Fruits(2),
    Drinks(3),
    Baking(4);

    private final int value;

    Category(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
