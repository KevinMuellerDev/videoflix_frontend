
# 🎬 VideoFlix Frontend – Next.js Video Plattform

VideoFlix Frontend is a modern web app developed with Next.js and React. It forms the user interface for the VideoFlix platform and offers everything you would expect from a Netflix clone:

Users can register, log in, reset their password and browse through a well-organized video library. Trailers run automatically in the browse view if the uploaded video is long enough.

The videos are streamed in HLS format, which not only runs smoothly but also allows different quality levels. The integrated player can be switched to full screen for a real streaming experience.

---

## 🚀 Features

- Display of videos, trailers & screenshots
- User registration, login and profile management
- Genre-based video categorization and search
- Responsive design for desktop and mobile
- Communication with VideoFlix backend via REST API

---

## 🛠️ Technologies

- Next.js (React Framework)
- React Hooks & Context API
- CSS Module
- Fetch Library
---

## ⚠️ Prerequisites

- Node.js 16+ and npm or yarn
- VideoFlix backend (must be installed and started separately)
  🔗 [https://github.com/KevinMuellerDev/videoflix_backend](https://github.com/KevinMuellerDev/videoflix_backend)

---

## 🚀 Installation and Start

1. Clone repository:

    ```bash
    git clone https://github.com/KevinMuellerDev/videoflix_frontend.git
    cd videoflix_frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    # oder
    yarn install
    ```

3. Run development Server:

    ```bash
    npm run dev
    # oder
    yarn dev
    ```

4. Open app in browser:

    [http://localhost:3000](http://localhost:3000)

---

## 📁 Project structure
```
videoflix_frontend/
│
├───components
│   ├───Browse
│   │   ├───ContentContainer
│   │   └───PreviewAction
│   ├───Footer
│   ├───FormContainer
│   ├───Forms
│   │   ├───ForgotPasswordForm
│   │   ├───LoginForm
│   │   ├───ResetPasswordForm
│   │   └───SignUpForm
│   ├───Header
│   ├───Toast
│   └───VideoPlayer
├───config
├───context
├───hooks
├───lib
├───pages
│   ├───activate
│   ├───browse
│   ├───forgotpassword
│   ├───imprint
│   ├───login
│   ├───privacypolicy
│   ├───resetpassword
│   ├───signup
│   └───videopage
└───styles
```

## 📬 Contact

If you have any questions or contributions, you can reach me at:  
**info@kevin-mueller-dev.de**

---
