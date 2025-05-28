# Astrology - Nostr Client Application

A modern Nostr client application built with React 18.x, TailwindCSS 3.x, Vite, shadcn/ui, and Nostrify.

## Features

- 🌐 Full Nostr protocol support with Nostrify
- ⚡ Lightning-fast development with Vite
- 🎨 Beautiful UI components from shadcn/ui
- 🔐 Secure authentication with NIP-07 browser extensions
- 📱 Responsive design with TailwindCSS
- 🔄 Real-time data updates with TanStack Query
- 🎯 Type-safe development with TypeScript

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- A Nostr browser extension for authentication (e.g., Alby, nos2x)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd astrology
```

2. Install dependencies:
```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will:
- Install any missing dependencies
- Start the Vite development server
- Open your application at `http://localhost:5173` (default Vite port)

The development server features:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- TypeScript type checking
- ESLint code linting

### Building for Production

To create a production build:

```bash
npm run build
```

This command will:
- Install dependencies
- Build the application with Vite
- Generate optimized production files in the `dist` directory
- Create a 404.html file for client-side routing support

### Testing

Run the test suite to ensure code quality:

```bash
npm run test
```

This will:
- Run TypeScript type checking
- Execute ESLint for code quality
- Run Vitest unit tests
- Perform a production build to verify everything works

## Deployment

### Quick Deploy with Surge

The project includes a convenient deployment script for Surge.sh:

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to Surge.sh automatically

You'll be prompted to:
- Choose or confirm a domain (e.g., `your-app-name.surge.sh`)
- Log in to Surge if not already authenticated

### Alternative Deployment Options

#### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

#### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy-gh": "gh-pages -d dist"
   ```
3. Run: `npm run deploy-gh`

### Static Hosting Configuration

For proper client-side routing support, configure your hosting service to:
- Serve `index.html` for all routes (the build script already creates a `404.html` copy)
- Set appropriate cache headers for assets
- Enable HTTPS (required for Nostr browser extensions)

## Environment Configuration

The application connects to public Nostr relays by default. To customize relay configuration:

1. Modify `src/providers/NostrProvider.tsx` to add or remove relay URLs
2. The default relays include:
   - wss://relay.damus.io
   - wss://relay.primal.net
   - wss://relay.nostr.band
   - wss://relayable.org
   - wss://relay.snort.social

## Project Structure

```
astrology/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── auth/       # Authentication components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Route page components
│   ├── lib/            # Utility functions
│   └── providers/      # Context providers
├── public/             # Static assets
├── dist/               # Production build output
└── index.html          # HTML entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run all tests
- `npm run deploy` - Deploy to Surge.sh

## Browser Extension Setup

To use the application, you'll need a Nostr browser extension:

1. **Alby** - [getalby.com](https://getalby.com)
2. **nos2x** - [github.com/fiatjaf/nos2x](https://github.com/fiatjaf/nos2x)
3. **Flamingo** - [flamingo.mask.io](https://flamingo.mask.io)

After installation:
1. Create or import your Nostr keys
2. Visit the application
3. Click "Log in" to connect your extension

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Ensure you're using Node.js v18+

### Nostr Connection Issues

If events aren't loading:
1. Check browser console for errors
2. Verify your internet connection
3. Try different relays in the configuration
4. Ensure your browser extension is unlocked

### Development Server Issues

If the dev server won't start:
1. Check if port 5173 is already in use
2. Try a different port: `npm run dev -- --port 3000`
3. Clear Vite cache: `rm -rf node_modules/.vite`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is based on MKStack template. Please check the original repository for license information.

## Support

For issues and questions:
- Check existing GitHub Issues
- Review the Nostr protocol documentation at [nostr.com](https://nostr.com)
- Consult the [Nostrify documentation](https://nostrify.dev)