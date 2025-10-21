# ⚡ Curv-UI | Modern React Component Library

**Build beautiful, accessible, and animated UIs faster with Curv-UI — a sleek, modern component library for React and Next.js**

[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)  
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)](https://tailwindcss.com/)  
[![Motion](https://img.shields.io/badge/Framer_Motion-animations-ff69b4)](https://www.framer.com/motion/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🌟 Overview

**Curv-UI** is a next-generation React component library designed for speed, elegance, and consistency.  
It offers a growing collection of **prebuilt, customizable, and animated components**, built with **TypeScript**, **Tailwind CSS**, and **Framer Motion**, ensuring delightful user experiences with minimal effort.

Perfect for:

- 🚀 **Frontend developers** who want to ship fast and look great
- 🧑‍💻 **Next.js users** who value performance and accessibility
- 🎨 **Designers & engineers** building consistent UI systems
- 🧩 **Teams & startups** who want a shared component foundation

## ✨ Features

- **🎨 Beautiful Components** – Ready-to-use UI blocks crafted for modern web apps
- **⚙️ Fully Customizable** – Built with Tailwind, easily theme and extend
- **💫 Motion Ready** – Framer Motion animations for smooth UX out of the box
- **📦 Tree-shakeable** – Import only what you need for optimal performance
- **🧱 Accessible by Default** – Follows WAI-ARIA best practices
- **🧠 Type Safe** – Built entirely with TypeScript for developer confidence
- **🧩 Composable Architecture** – Components designed for flexibility and reuse

## 🛠️ Tech Stack

- **Framework**: React 18 / Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Turborepo + Vite (for component builds)
- **Documentation**: Next.js MDX-based docs

## 📦 Project Structure

```
my-ui-library/
├── packages/
│   ├── cli/                    # CLI tool for copying components
│   │   ├── src/
│   │   │   ├── commands/
│   │   │   │   ├── init.ts    # Initialize config
│   │   │   │   └── add.ts     # Add components
│   │   │   ├── utils/
│   │   │   │   ├── get-config.ts
│   │   │   │   └── templates.ts
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── components/             # Component source code
│       ├── ui/
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   └── ...
│       └── package.json
│
├── apps/
│   ├── docs/                   # Documentation site
│   └── playground/             # Testing environment
│
├── registry/                   # Component registry (metadata)
│   ├── registry.json          # Component definitions
│   └── styles/                # Style variants
│
└── package.json               # Root package.json (monorepo)
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🚀 Getting Started

### Prerequisites

Make sure you have one of the following package managers installed:

- [Node.js](https://nodejs.org/) (18.0 or later)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/rohankumarchaudhary67/curv-ui.git
    cd curv-ui
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env.local
    ```

    Add your required API keys and configuration variables.

4. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can contribute:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write clean, readable code with proper comments
- Ensure responsive design compatibility
- Test your changes thoroughly before submitting

### Other Platforms

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other deployment options.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

## 🤝 Community & Support

- 📧 **Issues**: [GitHub Issues](https://github.com/rohankumarchaudhary67/curv-ui/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/rohankumarchaudhary67/curv-ui/discussions)
- 🐦 **Updates**: Follow the latest updates and announcements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Happy Contributing! 🎉**

Made with ❤️ for the open source community
