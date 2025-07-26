# 🎓 SkillVerse – Full-Stack E-Learning Platform

SkillVerse is a modern, scalable, full-stack e-learning web application built using **React**, **Redux Toolkit Query**, **Node.js**, and **MongoDB**, designed to bridge the gap between learners and educators. It supports secure payments through **Cashfree**, enabling a seamless learning experience from course enrollment to completion tracking.

> ⚡ Built with performance, modularity, and real-world scalability in mind — ideal for production-grade deployments in the ed-tech space.

---

### 🔗 Repository  
➡️ **GitHub**: [SkillVerse – E-Learning Platform](https://github.com/abhishekkhati-qmf/Skill-Verse-E-Learning-Platform)

---

## 🧠 Features Overview

| Feature | Description |
|--------|-------------|
| 🧑‍🎓 **Student Dashboard** | Course catalog, enrollment, progress tracking, invoices |
| 👨‍🏫 **Instructor Panel** | Create, manage & upload course content |
| 💳 **Payments** | Fully integrated Cashfree Payment Gateway |
| 🔐 **Auth** | Secure JWT-based login system |
| 📊 **Admin (Planned)** | Platform analytics, user/course management (coming soon) |

---

## 🔧 Tech Stack

| Layer        | Technologies Used                      |
|--------------|----------------------------------------|
| **Frontend** | React, Redux Toolkit Query, Tailwind CSS |
| **Backend**  | Node.js, Express.js                    |
| **Database** | MongoDB + Mongoose                     |
| **Payments** | Cashfree Payment Gateway               |
| **Auth**     | JWT (JSON Web Tokens)                  |

---

## 📁 Project Structure

SkillVerse/
├── client/ # Frontend code (React)
├── server/ # Backend code (Node.js + Express)
├── uploads/ # Local file storage (gitignored)
├── README.md
└── ...

yaml
Copy
Edit

---

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js v18+
- MongoDB running locally or on Atlas
- Cashfree Sandbox Account

---

### 🛠️ Setup Instructions

#### 1️⃣ Clone the Repo

```bash
git clone https://github.com/abhishekkhati-qmf/Skill-Verse-E-Learning-Platform.git
cd Skill-Verse-E-Learning-Platform
2️⃣ Backend (Server)
bash
Copy
Edit
cd server
npm install
cp .env.example .env   # Add your env variables
npm run dev
3️⃣ Frontend (Client)
bash
Copy
Edit
cd ../client
npm install
npm run dev
🔐 Environment Variables
Create a .env file in the server/ directory with:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
CASHFREE_APP_ID=your_app_id
CASHFREE_SECRET_KEY=your_secret_key
🎯 Roadmap
✅ Secure authentication

✅ Course enrollment & tracking

✅ Cashfree integration

🚧 Admin dashboard

🚧 Course reviews & ratings

🚧 Real-time progress analytics

📸 Screenshots (Add your own or let me generate UI mockups)
Coming soon...

🤝 Contributing
If you'd like to improve this project or contribute to future features:

bash
Copy
Edit
git fork https://github.com/abhishekkhati-qmf/Skill-Verse-E-Learning-Platform
Then submit a PR or raise an issue.

🧑‍💻 Author & Developer
Abhishek Khati
🎓 MCA | Frontend & MERN Stack Enthusiast
🔗 LinkedIn – abhishekkhati-qmf
📫 Reach out for collaboration, internships, or feedback.

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgements
React

Redux Toolkit

Node.js

MongoDB

Cashfree

Tailwind CSS

⭐ If you find this project valuable, feel free to star it or share your feedback. Your support helps me grow as a developer.


