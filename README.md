# Morphilm Portfolio Website

A clean static portfolio website for a filmmaker or video editor. It uses plain HTML, CSS, and lightweight JavaScript only, so it can be hosted for free on GitHub Pages without a backend or build tools.

## Replace the YouTube videos

1. Open `index.html`.
2. Search for `youtube.com/embed`.
3. Replace the placeholder video IDs with your own YouTube video IDs.

Example:

```html
https://www.youtube.com/embed/YOUR_VIDEO_ID
```

For a normal YouTube URL like:

```text
https://www.youtube.com/watch?v=abc123
```

use only the ID after `v=`:

```html
https://www.youtube.com/embed/abc123
```

The first embed in the hero section is the main showreel. The embeds inside the portfolio cards are individual project videos.

## Edit the text and contact info

1. Open `index.html`.
2. Look for comments that start with `EDIT:`.
3. Replace the placeholder tagline, project titles, descriptions, services, About copy, email address, and social links.

The main email link currently appears in two places:

```html
mailto:info@morphilm.com
```

Replace both with your own email address.

Most visual styling lives in `styles.css`. You can edit colors, spacing, and layout there.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload or commit these files to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `Morphilm Logo_Alpha_White.png`
   - `Morphilm Logo_Alpha_Black.png`
3. On GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your main branch and the root folder.
7. Save the settings.

GitHub will publish the site at a URL similar to:

```text
https://your-username.github.io/your-repository-name/
```

No install command, build command, server, or backend is required.
