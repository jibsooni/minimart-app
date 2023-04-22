package com.unclejack.spring.jpa.model;

public enum Role {
    User(0),
    Administrator(1);

    private final int value;

    Role(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
