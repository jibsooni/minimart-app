package com.unclejack.spring.jpa.model;

public class SuccessResponse {
    public Boolean success;
    public String message;

    public SuccessResponse() {
    }

    public SuccessResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
    
}
