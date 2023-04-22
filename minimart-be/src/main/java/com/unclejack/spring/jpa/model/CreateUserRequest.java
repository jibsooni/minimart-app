package com.unclejack.spring.jpa.model;

public class CreateUserRequest {
    public String username;
    public Role role;
    public String password;

    public CreateUserRequest(String username, String password, Role role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

}
