# 🍽️ E-Restaurant: Online Restaurant E-Commerce Platform

This is a full-stack web application designed to digitalize the food ordering experience for both customers and restaurant administrators. Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, the platform enables online menu browsing, cart management, and secure order placement, with an integrated admin panel for product and order management.

## 📌 Features

### 🔒 User Functionality
- Register/Login using Firebase and Stripe payment gateway integration.
- Browse food menu dynamically
- Add and remove items in the shopping cart
- Place orders.


## 🚀 Tech Stack

| Layer         | Technology               |
|--------------|--------------------------|
| Frontend     | React.js, CSS, Axios     |
| Backend      | Node.js, Express.js      |
| Database     | MongoDB (Mongoose ODM)   |
| Authentication | JWT, bcryptjs          |
| API Testing  | Postman                  |
| Version Control | Git, GitHub           |

## 📁 Project Structure

```bash
Restaurant-E-Commerce-Website-main/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
├── server/                 # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md

