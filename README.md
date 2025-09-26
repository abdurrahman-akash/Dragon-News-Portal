# Dragon News Portal 🐉📰

A modern and responsive news portal built with React, featuring the latest news articles, breaking news updates, and an intuitive user interface for seamless news browsing experience.

## ✨ Features

- **Latest News**: Stay updated with the most recent news articles
- **Breaking News Ticker**: Real-time scrolling news updates
- **Responsive Design**: Optimized for all device sizes
- **Clean UI**: Modern and user-friendly interface
- **Fast Loading**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13 with DaisyUI 5.1.20
- **Routing**: React Router DOM 7.9.1
- **Font**: Poppins (Google Fonts)
- **Icons & Animations**: React Fast Marquee for news ticker
- **Date Handling**: date-fns 4.1.0

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd dragon-news
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
dragon-news/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── LatestNews.jsx
│   │   └── Navbar.jsx
│   ├── layouts/         # Page layouts
│   │   └── HomeLayout.jsx
│   ├── pages/           # Page components
│   │   └── Home.jsx
│   ├── routes/          # Routing configuration
│   │   └── router.jsx
│   ├── index.css        # Global styles
│   ├── main.jsx         # App entry point
│   └── Root.jsx         # Root component
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Styling

This project uses:
- **Tailwind CSS v4** for utility-first styling
- **DaisyUI** for pre-built components
- **Poppins** font for modern typography

## 📱 Responsive Design

The Dragon News portal is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS and DaisyUI
- Icons and images from various sources
