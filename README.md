# The Traffic Ticket Guru Website

A premium, modern landing page for The Traffic Ticket Guru - a traffic ticket defense agency based in Alberta, Canada.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Fully Responsive** design
- **Component-based** architecture
- **Smooth animations** and transitions
- **Professional aesthetic** with premium design

## Sections

1. **Hero Section** - Eye-catching introduction with key statistics
2. **Trust Badges Row** - Credibility indicators
3. **How We Help You** - 3-step process visualization
4. **About The Agency** - Founder and company information
5. **Featured Services Grid** - Comprehensive service offerings
6. **Guarantee Section** - Trust and guarantee messaging
7. **Testimonials Section** - Client reviews and feedback
8. **Contact + Map Section** - Contact information and location map
9. **Footer** - Additional links and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page that imports all sections
├── components/
│   ├── HeroSection.tsx
│   ├── TrustBadgesRow.tsx
│   ├── HowWeHelpYou.tsx
│   ├── AboutTheAgency.tsx
│   ├── FeaturedServicesGrid.tsx
│   ├── GuaranteeSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactMapSection.tsx
│   └── Footer.tsx
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Fonts

- **Satoshi** - Used for all headings (h1, h2, h3, h4)
- **Inter** - Used for body text and paragraphs

### Setting Up Satoshi Font

Satoshi is a premium font that needs to be self-hosted. To use it:

1. Obtain the Satoshi font files (with appropriate license)
2. Create a directory: `public/fonts/satoshi/`
3. Add the following font files:
   - `Satoshi-Regular.woff2` (and/or `.woff`)
   - `Satoshi-Medium.woff2` (and/or `.woff`)
   - `Satoshi-Bold.woff2` (and/or `.woff`)
   - `Satoshi-Black.woff2` (and/or `.woff`)

The font-face declarations are already configured in `app/globals.css`. Once the font files are in place, Satoshi will automatically be used for all headings.

## Customization

All components are modular and can be easily customized:
- Update colors in `tailwind.config.js`
- Modify content in individual component files
- Adjust styling in component files or `globals.css`

## License

This project is proprietary and confidential.

