# UncleJack's Minimart

UncleJack's Minimart is a web-based application built with Java Spring Boot as the backend, Postgres as the database, and ReactJS as the frontend. It has been dockerized for easy deployment, and the images can be pulled from Docker Hub.

## Introduction

This application is designed to give my uncle an idea of how an online store will look and feel like. The user interface is built with ReactJS and features basic authentication and authorization for both regular users and admins. Users can browse items on the homepage and admins can manage items using the admin view.

## Prerequisites

1. Install Docker (https://docs.docker.com/engine/install/ubuntu/ if on Ubuntu)
2. Enable running Docker as non-root user (https://docs.docker.com/engine/install/linux-postinstall/)
3. Install docker-compose
4. Clone the repository 


## Steps to Run the Application

### Step 1: Run the start script

In the terminal, navigate to the project directory and run the following command:
```
./startApp
```

### Step 2: Access the application

The application can be accessed from the browser on `localhost:8081`

The homepage that appears contains the list of items that are available today.


### Step 3: Log in as an admin user

The database contains one admin user and one regular user with the following credentials: 

   - Admin user: username `unclejack`, password `unclejack123`
   - Regular user: username `xiaoming`, password `xiaoming123`

Click on the Admin button and enter the details of the admin user. Click the Enter button twice to confirm.


### Step 4: Manage items

On the admin page, it is possible to update items and add new items.

Click on the Add button to add new items to the store. 

Click on the Update button to edit the price and stock of a specific item, or click on the Delete button to remove the item from the store.

After any changes, return to the homepage to view the list of all available items.


### Step 5: Create new user

If desired, a new regular can be created. Click on the Sign Up button to be redirected to the newuser page. This new user can be used for login. However, there is no functionality for regular users on the application yet.


## Objectives

1. Basic user authentication and authorization
2. CRUD operations on database entities
    1. get all items in store
    2. create item in store
    3. update item in store
    4. get all items by category
    5. get item by name
    6. delete item by name
    7. get user for login
    8. create new user
    
3. User interface built with ReactJS
4. Easy deployment with Docker
5. Additional features: Hibernate ORM, Docker and Docker Compose support.
