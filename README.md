# SK Cafe - Professional Business Website

A modern, responsive cafe website built with React, TypeScript, and Tailwind CSS. Features an interactive menu system with search, filtering, and QR code integration for easy menu access.

## 🚀 Features

- **Interactive Menu System**: Browse through coffee, pastries, main meals, and more
- **Advanced Search & Filters**: Find items by name, category, or dietary preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **QR Code Integration**: Scan to access menu digitally
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sk-cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
sk-cafe/
├── public/
│   ├── myqr.png          # QR code for menu access
│   └── vite.svg          # Vite favicon
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # TypeScript declarations
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # Project documentation
```

## 🍽️ Menu Features

- **Categories**: Coffee & Tea, Pastries, Main Meals, Cold Beverages, Desserts, Snacks
- **Filters**: Vegetarian, Popular Items, Spicy options
- **Search**: Real-time search through menu items
- **Pricing**: All prices in INR (₹)
- **Item Details**: Descriptions, dietary information, and popularity indicators

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🎨 Customization

### Adding Menu Items
Edit the `menuItems` array in `src/App.tsx` to add new items:

```typescript
{
  id: number,
  name: string,
  price: number,
  description?: string,
  category: string,
  popular?: boolean,
  vegetarian?: boolean,
  spicy?: boolean
}
```

### Styling
The project uses Tailwind CSS classes. Customize colors and styles in:
- `tailwind.config.js` for theme configuration
- Component files for specific styling

## 🌐 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to SK Cafe.

## 📞 Contact

- **Website**: [SK Cafe](https://skcafe.com)
- **Email**: info@skcafe.com
- **Phone**: (555) 123-4567
- **Location**: Kolaba, Mumbai

## 🏆 Certifications

- FSSAI Licensed
- Organic Certified
- ISO 22000:2018
- Eco-Friendly Packaging

---

**Crafted with passion, served with excellence • Mumbai's favorite neighborhood cafe**
