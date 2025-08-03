# Strong Blogger Client // Update me fully when done

This is the frontend client for **Strong Blogger**, a modern, visually engaging blogging platform built with React and Vite. It supports secure OAuth authentication, a sleek UI with Tailwind CSS and ShadCN components, and dynamic features such as live counters and animated sections.

## 🧱 Tech Stack

- **React** with **Vite** – Fast frontend tooling and development experience
- **Tailwind CSS** – Utility-first styling
- **ShadCN UI** – Prebuilt accessible components
- **React Router** – SPA routing
- **Axios** – API communication with the backend
- **Framer Motion** – Animation and transitions
- **CountUp.js / react-countup** – Animated counters (for blog stats or impact counters)

## 🎯 Features

- Animated landing page for audience engagement
- OAuth login via Google & GitHub (handled via backend)
- Session-based user state synced with backend
- Live updating UI (e.g. blog post counts, donation counters)
- SPA-style navigation with smooth transitions
- Responsive layout for desktop and mobile
- SEO-ready page structure and meta tags

## 📁 Project Structure

```
strong-blogger-client/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page views (Home, Login, Dashboard, etc.)
│   ├── api/               # Axios API utilities
│   ├── App.tsx            # Root component with routes
│   └── main.tsx           # Entry point
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite config
└── package.json
```

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/strong-blogger-client.git
   cd strong-blogger-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Environment Setup**  
   Create a `.env` file if needed:
   ```
   VITE_API_URL=http://localhost:3000
   ```

## 🔐 OAuth Flow

OAuth login is triggered via routes (e.g. `/auth/google`) which redirect to the backend server. The backend handles authentication and session cookies.

## 🌐 SEO Tips

- Use `<Helmet>` (or manually set `<meta>` tags) for each route.
- Preload images and important assets.
- Use semantic HTML and ARIA roles.

## 🧪 Testing (Optional / Planned)

- Unit tests with **Vitest** or **Jest**
- Component tests with **React Testing Library**

---

Built with ❤️ by Drew (Andrew Eskenazi)
