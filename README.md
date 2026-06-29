# Vishwa Corporation Web

Pixel-perfect implementation of the Vishwa Corporation Fintech/Manufacturing website from Figma.

## Figma Source
https://www.figma.com/design/oOjzdLRq1cdbYqVUaiXQVf/Fintech?node-id=39-301

## Stack
- React 18 + TypeScript
- Next.js 14 (App Router)
- Tailwind CSS
- CSS Modules (for complex one-off overrides)

## Sections (build order)
1. Navbar
2. Hero
3. Exports / Stats
4. About / Story
5. Services / Features (dark)
6. Innovation / Gallery
7. Process
8. Partnership
9. Global Reach
10. Shipping / Contact Form
11. Footer

## Project Structure
```
vishwa-corporation-web/
├── components/       # Shared reusable UI components (Button, Badge, etc.)
├── sections/         # Full-width page sections (HeroSection, AboutSection, etc.)
├── pages/            # Next.js page files
├── assets/           # Images, icons, fonts
├── styles/           # Global CSS, tokens, typography
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
├── constants/        # Design tokens, site data
└── types/            # TypeScript types
```

## Build Process
Each section is built one at a time, validated against Figma, then approved before proceeding.
