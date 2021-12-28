# E-COMMERCE SITE USING REACT

| Contents
|---
| [Application Structure](#application)
| [General](#general)
| [Other](#other)
| [Authentication](#authentication)

## 1.Application Structure

The application have:
*	Public Part (Accessible without authentication)
*	Private Part (Available for Registered Users)
### 1.1 Public Part
The public part is visible without authentication. This is the list of all items selled on the site. There is option to find them by category like: clothes, shoes, etc.
### 1.2 Private Part (User Area)
Registered users can add items to the cart and/or to their favourite list. Users can acces the application after succesful login or after creating new account using email and password.


## General

* Dynamic pages - Home, Category, Cart, Profile
* Views - Home(all items), Category (specific category)
* Logged user can put items in Cart and Favourite list. They can update or delete the items stored in these 2 lists.


### Authentication

The service is initialized with 1 user, which can be used for immediate testing:
* dakata@gmail.com : 123456

Additional users can be added via the Register link.

* Register - register wit e-mail and password
* Login - login with existing e-mail and password
* Logout - viewing the site as guest



