# 🌺 Ceyora Frontend

> **Ceyora** is a mobile-first travel-tech platform that connects travelers with authentic, curated cultural experiences across Sri Lanka — guided by local hosts, artisans, and communities.

---

## 🛠️ Tech Stack

- **React** (v18+)
- **Tailwind CSS** (utility-first styling)
- **React Router** (routing)
- **Framer Motion** (animations)
- **Vite** or **CRA** (build tool)
- **Mock Data** (locally served for development)

---

## 📁 Folder Structure Overview

```
src/
├── assets/             # Images, logos, illustrations
├── components/         # Reusable UI components (grouped by domain, e.g., /journeys/, /privacy/)
├── constants/          # Static content (FAQs, policy text, about info)
├── features/           # Feature modules (journeys, bookings, etc.)
│   └── journeys/       # With api/, pages/, components/, hooks/
├── hooks/              # Shared custom React hooks
├── layouts/            # Layout components (e.g., DefaultLayout)
├── mock/               # Mock data for journeys, bookings, etc.
├── pages/              # Page-level routes (e.g., Home, About, FAQ)
├── router/             # Centralized route definitions
├── utils/              # Helper functions and formatters
└── App.jsx             # App root entry point
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ceyora-frontend.git
cd ceyora-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or for CRA:
npm start
```

---

### 4. Environment Variables

Create a `.env` file at the root for backend integration (optional):

```env
REACT_APP_API_URL=https://api.ceyora.com
```

> ✅ No backend needed during MVP — mock data is used from `/src/mock/`.

---

## 💡 Usage Notes

### 🔑 Key Entry Points

- `src/App.jsx` – app entry point
- `src/router/AppRouter.jsx` – all routing logic
- `src/layouts/DefaultLayout.jsx` – layout wrapper

### 📄 Page Components

- `/pages/Home.jsx`
- `/pages/AboutUs.jsx`
- `/pages/FAQ.jsx`
- `/pages/PrivacyPolicy.jsx`
- `/features/journeys/pages/JourneysPage.jsx`
- `/features/bookings/pages/BookingFormPage.jsx`

### 🧪 Dummy Data

- Available in `/src/mock/`
- Files: `journeys.js`, `tags.js`, `bookings.js`, etc.
- Import and use like:

```js
import { journeys } from "../../mock";
```

---

### 🔌 Backend Integration

- All fetch logic placed in `features/[feature]/api/`
- Replace mock functions like `fetchJourneys()` with real API calls:

```js
const res = await fetch(`${process.env.REACT_APP_API_URL}/journeys`);
const data = await res.json();
```

- Use `async/await` + error/loading states
- Ready for React Query or Axios integration

---

## 🤝 Contributing

Pull requests are welcome. Feel free to improve logic, structure, or prepare it for backend integrations.

---

## 🧼 License

This project is licensed under the MIT License.

---

> Designed with ❤️ to honor Sri Lanka’s cultural spirit — powered by modern frontend engineering.
