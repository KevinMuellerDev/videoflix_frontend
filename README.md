
# 🎬 VideoFlix Frontend – Next.js Video Plattform

VideoFlix Frontend ist eine moderne Web-App, die mit Next.js und React entwickelt wurde. Sie bildet die Benutzeroberfläche für die VideoFlix-Plattform und bietet alles, was man von einem Netflix-Klon erwartet:

Nutzer können sich registrieren, einloggen, ihr Passwort zurücksetzen und durch eine übersichtliche Videobibliothek stöbern. In der Browse-Ansicht laufen automatisch Trailer ab, wenn das hochgeladene Video lang genug ist.

Die Videos werden im HLS-Format gestreamt, was nicht nur flüssig läuft, sondern auch verschiedene Qualitätsstufen erlaubt. Der integrierte Player lässt sich auf Vollbild umschalten und sorgt so für ein echtes Streaming-Erlebnis.

---

## 🚀 Features

- Anzeige von Videos, Trailern & Screenshots
- Benutzerregistrierung, Login und Profilverwaltung
- Genre-basierte Video-Kategorisierung und Suche
- Responsive Design für Desktop und Mobile
- Kommunikation mit VideoFlix Backend über REST-API

---

## 🛠️ Technologien

- Next.js (React Framework)
- React Hooks & Context API
- CSS Module
- Fetch Library
---

## ⚠️ Voraussetzungen

- Node.js 16+ und npm oder yarn
- VideoFlix Backend (muss separat installiert und gestartet werden)  
  🔗 [https://github.com/KevinMuellerDev/videoflix_backend](https://github.com/KevinMuellerDev/videoflix_backend)

---

## 🚀 Installation und Start

1. Repository klonen:

    ```bash
    git clone https://github.com/KevinMuellerDev/videoflix_frontend.git
    cd videoflix_frontend
    ```

2. Abhängigkeiten installieren:

    ```bash
    npm install
    # oder
    yarn install
    ```

3. Entwicklungsserver starten:

    ```bash
    npm run dev
    # oder
    yarn dev
    ```

4. App im Browser öffnen:

    [http://localhost:3000](http://localhost:3000)

---

## 📁 Projektstruktur
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

## 📬 Kontakt

Bei Fragen oder Beiträgen erreichst du mich unter:  
**info@kevin-mueller-dev.de**

---
