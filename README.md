# LeadBuddie Website

Professional Next.js 14 landing page for LeadBuddie.com - AI-Powered WhatsApp Lead Manager for SMBs Worldwide (Made in India).

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Fully Responsive** design (mobile-first)
- **SEO Optimized** with proper meta tags
- **Dark Theme** with professional SaaS design
- **All Required Pages** for Meta/WhatsApp Business API approval

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Add screenshot images:**
   - Create folder: `public/images/`
   - Add your screenshots with these exact file names:
     - `dashboard-overview.png` (or `.jpg`, `.webp`)
     - `lead-detail-view.png` (or `.jpg`, `.webp`)
     - `ai-summary.png` (or `.jpg`, `.webp`)
   - Recommended size: 1200x800px or similar aspect ratio (16:9)
   - Format: PNG, JPG, or WebP (WebP recommended for best performance)

3. **Update contact information:**
   - Open `lib/constants.ts`
   - Update `CONTACT.phone` with your India phone number
   - Update `CONTACT.address` with your India address

4. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
leadbuddie-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── features/           # Features page
│   ├── pricing/            # Pricing page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── how-it-works/       # How it works page
│   ├── privacy-policy/     # Privacy Policy (required for Meta)
│   └── terms/              # Terms of Service (required for Meta)
├── components/             # React components
│   ├── layout/             # Navbar, Footer, MobileMenu
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   ├── features/           # Feature components
│   ├── pricing/            # Pricing components
│   ├── forms/              # Contact form
│   └── ui/                 # Reusable UI components
├── lib/                    # Utilities and constants
│   ├── constants.ts        # Brand info, contact details
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build
   - Your site will be live in minutes!

3. **Configure Custom Domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (leadbuddie.com)
   - Follow DNS configuration instructions

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Self-Hosted:**
```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (optional for now):
```env
NEXT_PUBLIC_SITE_URL=https://leadbuddie.com
```

### Update Contact Information

Before deploying, make sure to update:
- Phone number in `lib/constants.ts`
- Business address in `lib/constants.ts`
- Any placeholder content

## 📝 Meta/WhatsApp Business API Approval Checklist

This website includes all required elements for Meta approval:

✅ **Privacy Policy** (1000+ words)
- WhatsApp data handling section
- Third-party services disclosure
- User rights and data retention

✅ **Terms of Service** (800+ words)
- WhatsApp usage policy
- Compliance statements
- Payment and refund terms

✅ **Contact Information**
- General email (hello@hutliv.com)
- Support email (support@hutliv.com)
- Business address (update in constants.ts)
- Phone number (update in constants.ts)

✅ **Compliance Statements**
- "How We Use WhatsApp" section
- No spam policy
- Meta policy compliance

✅ **Clear Business Purpose**
- Lead management focus
- No bulk messaging
- CRM functionality

✅ **All Required Pages**
- Home, Features, Pricing, About, Contact
- How It Works
- Privacy Policy
- Terms of Service

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { ... },    // Purple theme
  secondary: { ... },   // Blue theme
  accent: { ... },     // Teal theme
}
```

### Content

- Update `lib/constants.ts` for brand information
- Modify page components in `app/` directory
- Update section components in `components/sections/`

## 📱 Features Included

- ✅ Responsive navigation with mobile menu
- ✅ Hero section with CTAs
- ✅ Problem statement section
- ✅ Features showcase
- ✅ Screenshot placeholders
- ✅ Compliance section
- ✅ Pricing preview and full pricing page
- ✅ Trust badges and testimonials
- ✅ Contact form
- ✅ Footer with all required links

## 🔒 Security & Compliance

- SSL/HTTPS ready (automatic on Vercel)
- Privacy Policy compliant
- Terms of Service included
- WhatsApp Business Policy compliance
- GDPR-ready data handling

## 📊 SEO

- Meta tags configured
- Open Graph tags
- Structured data ready
- Semantic HTML
- Fast loading times

## 🐛 Troubleshooting

**Build errors:**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (18+ required)

**Styling issues:**
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

**Type errors:**
- Run: `npm run build` to see TypeScript errors
- Check `tsconfig.json` configuration

## 📞 Support

For questions or issues:
- Email: hello@hutliv.com
- Support: support@hutliv.com

## 📄 License

© 2025 Hutliv Technologies. All rights reserved.

---

**Made in India ❤️ | Available Worldwide**

