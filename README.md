

# Ultimate Tripz - Travel Tips & Destination Guides Platform

A platform for travel enthusiasts to share their travel stories, tips, and guides. This project includes user authentication, social interactions like upvoting, downvoting, commenting, following/unfollowing, and premium content for verified users.

## Live URL

> 

### Credentials

#### User:

- **Email**: `user@tripz.com`
- **Password**: `123456`

#### Admin:

- **Email**: `admin@tripz.com`
- **Password**: `123456`

---

## Technology Stack

- **Frontend**: React, NextJS, TypeScript
- **State Management**: Redux Toolkit (RTK Query)
- **UI Library**: NextUI
- **Backend**: MongoDB, Mongoose, Typescript, Express, JWT-based authentication
- **Payment Integration**: Aamarpay

---

## Features

- **User Roles**:
  - Standard users and admin roles.
  - Users can follow/unfollow others, upvote/downvote posts, comment, and manage their own content.
  - Admins can manage users, posts, and moderate content.
- **Premium Users**:

  - Users can be verified through payments, becoming premium users.
  - Premium users can publish premium posts visible only to other premium users.

- **Dynamic Search and Sorting**:

  - Users can search, filter, and sort articles based on different criteria.

- **Payment System**:

  - Integrated payment gateway for user verification and premium content access.

- **Admin Features**:

  - Admins can control content, users, and overall platform activity.

- **Conditional Routing**:
  - Protected routes for specific roles.

---

## Pages

1. **Login/Registration Page**:

   - User authentication forms for login and registration.

2. **Admin Dashboard**:

   - Admin interface for managing users, content, and payments.

3. **Profile Page**:

   - Shows user’s posts, followers, followed accounts.
   - Allows users to edit their profile details.

4. **News Feed**:

   - Displays posts from the community, with options to filter, search, and sort posts.

5. **Post Details Page**:

   - Detailed view of individual posts, including upvote counts, comments, and premium content visibility.

6. **About Us Page**:

   - Information about the project, its mission, and the team behind it.

7. **Contact Us Page**:

   - A form or details for inquiries and support.

---

## Installation Guide

### Step 1: Clone the repository

```bash

```

### Step 2: Navigate to the project folder

```
cd ultimate-tripz-frontend
```

### Step 3: Install dependencies

```
npm install
```

### Step 4: Start the development server

```
npm run dev
```
