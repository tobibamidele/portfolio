# Tobi Franklin — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

## Stack
- **React 18** — UI
- **Vite** — Build tool
- **Tailwind CSS v3** — Styling
- **Geist** — Font (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**

No extra configuration needed — `vercel.json` is already set up.

## Project Structure

```
src/
  components/
    Hero.jsx          # Landing section
    About.jsx         # About section
    Projects.jsx      # Side projects grid
    ProjectCard.jsx   # Individual project card
    SpotifyPill.jsx   # Now-playing Spotify toast pill
    Footer.jsx        # Footer
  hooks/
    useNowPlaying.js  # Polls the Spotify serverless API
  App.jsx
  main.jsx
  index.css
api/
  spotify.js          # Vercel serverless function → Spotify API
```

## Spotify "Now Playing" Pill

A small green pill in the bottom-right shows the current track playing on your
Spotify account (live, updates every ~15s). On mobile it collapses to a compact
icon; tap to expand.

It's wired through a **serverless function** (`api/spotify.js`) so the Spotify
credentials never ship to the browser, and the function scales to zero on Vercel.

### One-time setup

1. **Create a Spotify app**
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) → Create app.
   - Add a Redirect URI, e.g. `http://localhost:8888/callback`.
   - Note the **Client ID** and **Client Secret**.

2. **Get a refresh token** (letting your account be read). Run this once,
   substituting your URL-encoded client ID:
   ```bash
   # 1) Open in a browser (authorize; you'll be redirected to a dead page with ?code=...)
   open "https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fcallback&scope=user-read-currently-playing&show_dialog=true"
   ```
   Copy the `code` value from the redirect URL, then:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=YOUR_CODE" \
     -d "redirect_uri=http://localhost:8888/callback" \
     -u "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET"
   ```
   Copy the `refresh_token` from the response.

3. **Set environment variables** (never commit these).
   - Locally: create a `.env` (or export them):
     ```
     SPOTIFY_CLIENT_ID=...
     SPOTIFY_CLIENT_SECRET=...
     SPOTIFY_REFRESH_TOKEN=...
     ```
   - On Vercel: Project → Settings → Environment Variables → add the same three
     names for Production/Preview. Redeploy afterwards.

### Running locally with the API

The `api/spotify.js` function needs Vercel's runtime, so use `vercel dev` to
serve both the SPA and the function:

```bash
npm i -g vercel
vercel dev
```

Then open the URL Vercel prints (typically `http://localhost:3000`).


## Updating Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```js
const projects = [
  {
    name: 'YourProject',
    description: 'Short description.',
    githubUrl: 'https://github.com/you/project',
    icon: null, // or an image URL
  },
  // ...
]
```
