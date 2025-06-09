# Tak Taby - Professional Roofing Services Website

A modern, responsive website for Tak Taby roofing company built with Nuxt 3, featuring professional design, SEO optimization, and modular architecture.

## 🚀 Features

- **Modern Architecture**: Built with Nuxt 3 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, and robots.txt
- **Performance**: Optimized images with WebP support and lazy loading
- **Content Management**: Markdown-based content system
- **Form Handling**: Advanced form validation and processing
- **State Management**: Pinia for reactive state management
- **Smooth Animations**: Enhanced UX with smooth scrolling and transitions

## 🛠️ Tech Stack

### Core
- **[Nuxt 3](https://nuxt.com/)** - Vue.js framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

### UI & UX
- **[@nuxt/ui](https://ui.nuxt.com/)** - Modern UI components
- **[Google Fonts](https://fonts.google.com/)** - Inter & Playfair Display
- **[Swiper](https://swiperjs.com/)** - Touch sliders for galleries
- **[Vue3 Smooth Scroll](https://www.npmjs.com/package/vue3-smooth-scroll)** - Smooth navigation

### Functionality
- **[@pinia/nuxt](https://pinia.vuejs.org/)** - State management
- **[@vueuse/nuxt](https://vueuse.org/)** - Vue composition utilities
- **[@formkit/nuxt](https://formkit.com/)** - Form handling & validation
- **[@nuxt/content](https://content.nuxtjs.org/)** - Content management
- **[@nuxt/image](https://image.nuxtjs.org/)** - Image optimization

### SEO & Performance
- **[@nuxtjs/seo](https://nuxtseo.com/)** - SEO optimization
- **[@nuxtjs/sitemap](https://sitemap.nuxtjs.org/)** - Automatic sitemap
- **[@nuxtjs/robots](https://sitemap.nuxtjs.org/robots)** - Robots.txt management

## 📁 Project Structure

```
app/
├── components/
│   ├── atoms/      # Basic UI elements (buttons, inputs)
│   ├── molecules/  # Component combinations (cards, forms)
│   ├── organisms/  # Complex sections (header, footer)
│   └── templates/  # Page layouts
├── stores/         # Pinia state management
├── plugins/        # Vue plugins
├── middleware/     # Route middleware
├── pages/          # Application pages
├── layouts/        # Page layouts
├── assets/         # Static assets
└── utils/          # Utility functions

content/
├── blog/          # Blog posts
├── services/      # Service descriptions
└── projects/      # Project showcases

public/            # Public static files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Budowalka/tak-taby-roofing.git
   cd tak-taby-roofing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 📝 Development Guidelines

### Component Architecture
- Follow **Atomic Design** principles
- Use **composition API** with `<script setup>`
- Implement **TypeScript** for type safety
- Create **reusable components** in appropriate atomic levels

### Coding Standards
- Use **ESLint** for code linting
- Follow **Vue.js** style guide
- Write **semantic HTML**
- Use **Tailwind utilities** for styling

### Content Management
- Store content in `/content` directory
- Use **Markdown** for blog posts and pages
- Organize content by type (blog, services, projects)

## 🎨 Design System

### Typography
- **Inter**: Primary font for body text
- **Playfair Display**: Display font for headings

### Colors
- Professional color palette for roofing industry
- Consistent spacing and sizing scales
- Accessible contrast ratios

### Components
- Modular design system
- Consistent styling patterns
- Responsive design principles

## 📞 Contact

**Tak Taby Roofing Services**
- Website: [tak-taby.com](https://tak-taby.com)
- Email: info@tak-taby.com

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for professional roofing services
