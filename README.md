# 🌦️ Atmosense

**Atmosense** is a clean, modern weather application built with **React**, **Redux**, and **Tailwind CSS**. It fetches real-time weather data from the OpenWeatherMap API and displays it in a minimal and responsive UI. The app also supports Persian date format using `moment-jalaali`.

---

## 🚀 Features

- Live weather data (city-based search)
- Responsive design with Tailwind CSS
- Redux for state management
- Persian (Jalaali) date support
- Weather icon, temperature, description, and more
- Sunrise, sunset, humidity, wind speed, pressure, etc.
- Simple animated UI with Framer Motion
- Light mode support (in progress)

---

## 🛠 Tech Stack

- React 19
- Redux (vanilla)
- Tailwind CSS
- Axios
- Framer Motion
- Moment-Jalaali
- OpenWeatherMap API

---

## 📦 Installation

```bash
git clone https://github.com/your-username/Atmosense.git
cd Atmosense
npm install
npm run dev

Replace the API key in src/Redux/Action.js:

&appid=your_api_key_here


---

🌐 API

This app uses OpenWeatherMap API to fetch real-time weather data.


---

📂 Project Structure (simplified)

src/
├── components/
│   ├── Intro/
│   ├── Weather/
│   └── PersianDate/
├── Redux/
│   ├── Action.js
│   ├── Reducer.js
│   └── Type.js
├── assets/
├── App.jsx
└── main.jsx


---

✅ Todo

[x] Current weather display

[x] Persian date integration

[x] UI animations

[ ] 5-day forecast

[ ] Multi-language support (EN/FA)

[ ] Dark mode

[ ] Deployment



---

📃 License

MIT © 2025 Amirmohamad



