# BAI12153 Web Programming – Assignment 2  
## Lab 1 & Lab 2 Source Code Guide

> **Student Name**: [TanLePin,Tharany A/P Jayakumar]  
> **Student ID**: [BAI_B2009F_2505001,BIT_B2201F_25050001]  
  

---

## 📁 Project Overview
This project contains both **Lab 1 (HTTP GET & POST)** and **Lab 2 (Responsive Multilingual Website)**.  
The project is divided into two main folders:

React-flask-bootstrap/
├─ Backend/ → Flask backend for Lab 1
└─ client/ → React frontend for Lab 1 & Lab 2

markdown
Copy code

---

## ⚙️ Folder Explanation

### **1. Backend/**
**Purpose:** Implements Lab 1 – HTTP GET and POST form handling.  
**Key File:**  
- `app.py`  
  - Flask server that processes GET and POST requests.  
  - `/login`: handles POST from Login form, validates email & password.  
  - `/lab1/test-get`: simple GET demonstration with query string.  
  - Includes validation and safe input handling using `html.escape()`.

Run backend:
```bash
cd Backend
python app.py
2. client/
Purpose: React front-end interface for both labs.
Key Files:

src/App.jsx – main router setup.

src/pages/Login.jsx – Lab 1 login form (POSTs to Flask backend).

src/pages/company.jsx – Lab 2 company website using Bootstrap and bilingual content.

src/pages/Landing.jsx – main landing page linking to all sections.

package.json – npm configuration for dependencies.

Run frontend:

bash
Copy code
cd client
npm install
npm run dev
Open: http://localhost:5173

🧩 Lab Summary
Lab 1 – HTTP GET & POST
React Login form submits POST request to Flask /login.

Flask validates and sanitizes data.

Additional GET demo at /lab1/test-get?name=Alice.

Lab 2 – Multilingual Company Page
Built with Bootstrap 5 for responsive layout.

Supports English and Chinese via translation object and state toggle.

Sections include Navbar, Hero, Services, About, Contact, and Footer.

🧠 Notes for Marker
Frontend (client/) uses React but still performs real HTTP form submission to Flask (not simulated).

Backend (Backend/) runs independently on port 5000.

Language switch, responsive design, and validation are fully functional.

✅ How to Test
Run Flask backend.

Run React frontend.

Visit:

http://localhost:5173/login → test POST (Lab 1)

http://localhost:5000/lab1/test-get?name=Alice → test GET

http://localhost:5173/company → test bilingual company page (Lab 2)

