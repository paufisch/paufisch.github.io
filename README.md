# Paul Fischer

Source of my personal research website: a single page with a short introduction, my accounts and my publications. It is built with Next.js, TypeScript and Tailwind CSS and exported as static files.

## Development

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

The site then runs at [http://localhost:3002](http://localhost:3002).

## Building

```bash
npm run build
```

This writes the finished site to `out/`. To preview it locally:

```bash
python3 -m http.server 3002 --directory out
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, the Pages source must be set to GitHub Actions.

The site must be served from the root of its domain, because assets such as `/papers/...` use absolute paths. If the domain changes, update `metadataBase` in `app/layout.tsx`.

## Editing

- **Text and accounts:** the introduction and the `accounts` list are in `app/page.tsx`.
- **Publications:** add an entry to the `papers` array in `app/page.tsx`. Each one needs a title, authors, venue, link, summary and thumbnail.
- **Thumbnails:** `app/InformationCurves.tsx` is an inline SVG and `app/FlowThumbnail.tsx` plays a sprite of simulation frames from `public/papers/`.
- **Colours and animations:** these are in `app/globals.css`. Colours adapt to the visitor's light or dark setting.
- **Page title and description:** these are in `app/layout.tsx`.

## License

The code is available under the [MIT License](LICENSE). This does not cover the site's content, meaning the text, the publication summaries, the thumbnails and the data behind them, which remain the copyright of their respective authors.
