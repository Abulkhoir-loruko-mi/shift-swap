# ShiftSwap 🏥📱

**A Mobile Shift Management Solution for Healthcare Professionals**

ShiftSwap is a mobile application designed to solve the chaos of hospital shift scheduling. It allows nurses and medical staff to view their schedules, request shift swaps seamlessly, and manage their availability in real-time.

> **Note:** This project was built as the Capstone Project for the **Tech4Africans Mobile Development Bootcamp** (2026).

---

## 🚀 Key Features

* **🔐 Secure Authentication:** Robust Login and Registration flow with validation and error handling.
* **📅 My Schedule:** clear, chronological view of assigned shifts using data fetched from the backend.
* **🔄 Smart Swap System:**
    * Users can request swaps for specific shifts.
    * **Complex Validation:** Implemented logic to handle swap reasons, deadlines, and status checks (e.g., preventing swaps on already-requested shifts).
* **📋 Available Swaps:** A marketplace view where colleagues can see and accept dropped shifts.
* **👤 Profile Management:** User details and role management.

---

## 🛠️ Tech Stack

* **Framework:** React Native (Expo SDK 52)
* **Language:** JavaScript (ES6+)
* **Navigation:** React Navigation (Stack & Tabs) / Expo Router
* **Networking:** Axios (with Interceptors for error handling)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Backend:** Node.js/Express & MongoDB (consumed via API)

---

## 💡 Technical Highlights & Wins

Building ShiftSwap involved overcoming significant technical challenges:

1.  **API Payload Management:**
    * Successfully structured complex JSON payloads for the `/swap-requests` endpoint, ensuring strict data types (ISO Dates, Snake_case vs CamelCase) matched backend requirements.
2.  **Error Handling Architecture:**
    * Implemented a robust error parsing system to catch `400 Bad Request` and `Validation Failed` errors, translating raw backend messages into user-friendly alerts.
3.  **Real-Device Testing:**
    * Optimized the app for production APK builds, resolving "White Screen" UI issues related to Dark Mode system settings.

---

## 📸 Screenshots

| Login Screen | My Schedule | Swap Request |
|:---:|:---:|:---:|
| *(Add Screenshot Here)* | *(Add Screenshot Here)* | *(Add Screenshot Here)* |

> *To add screenshots: Upload images to your repo and paste the links above.*

---

## ⚙️ Installation & Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Abulkhoir-loruko-mi/shift-swa(https://github.com/Abulkhoir-loruko-mi/shift-swap.git))
    cd ShiftSwap
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the server:**
    ```bash
    npx expo start
    ```

4.  **Run on Device:**
    * Download the **Expo Go** app on Android/iOS.
    * Scan the QR code from the terminal.

---

## 🔮 Future Improvements

* **Push Notifications:** To alert users when a swap request is accepted.
* **Admin Dashboard:** For hospital managers to approve/deny final rosters.
* **In-App Chat:** Allowing users to discuss swap details before confirming.

---

**Author:**Oladeji Sooliu 
**Contact:** oladejisoliu@gmail.com
