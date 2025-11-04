# fanny-cayol

Site vitrine pour Fanny Cayol - Built with Astro, React, and TypeScript

## 🚀 Project Structure

This is a static website built with Astro and React, configured for deployment to Cloudflare Pages.

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Counter.tsx       # React component example
│   │   └── Counter.css       # Component styles
│   ├── pages/
│   │   └── index.astro       # Main page
│   └── env.d.ts              # TypeScript definitions
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📦 Deployment to Cloudflare Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to **Pages** > **Create a project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
6. Click **Save and Deploy**

### Manual Deployment

You can also deploy manually using Wrangler CLI:

```bash
npm run build
npx wrangler pages deploy dist
```

## 🛠️ Technologies

- **Astro**: Static site generator
- **React**: UI components with client-side interactivity
- **TypeScript**: Type-safe development
- **Cloudflare Pages**: Hosting platform

## 📝 Notes

- This project is configured for full static site generation (SSG)
- React components are used for interactive elements with `client:load` directive
- All pages are pre-rendered at build time for optimal performance
