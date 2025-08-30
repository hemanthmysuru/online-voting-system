# online-voting-system

# 🗳️ Online Voting System

This project is a secure, modern online voting system built with **Angular 20** on the frontend and **Node.js v20.19.3** with **MySQL** on the backend.

---

## 📚 Technologies Used

- **Frontend:** Angular 20, RxJS, SCSS
- **Backend:** Node.js v20.19.3, Express.js, TypeORM, JWT, bcrypt
- **Database:** MySQL
- **Dev Tools:** Prettier, ts-node, Nodemon, TypeScript

---

## 🗂 Project Structure


online-voting-system/
├── client/ # Angular frontend app
│ ├── src/
│ └── package.json
│
├── server/ # Node.js backend API
│ ├── src/
│ └── package.json



---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/online-voting-system.git
cd online-voting-system


## 2. Backend Setup (Node.js + MySQL)
cd server
npm install


PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_NAME=voting_system
JWT_SECRET=your_jwt_secret
