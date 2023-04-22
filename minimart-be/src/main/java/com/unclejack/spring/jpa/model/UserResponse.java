package com.unclejack.spring.jpa.model;

public class UserResponse {
    public String username;
    public Role role;

    public UserResponse(User user) {
        this.username = user.getUsername();
        this.role = user.getRole();
    }
}
