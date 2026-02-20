# Obyčejně dobré zdraví

Moderní web pro výživové a sportovní poradenství, masáže a instruktáž bowlingu – Oldřich Petráš, Kroměříž.

## Technologie

- **Vite** – build a dev server
- **Tailwind CSS** – styly
- Čistý HTML/CSS/JS (žádný framework)

## Vývoj

```bash
npm install
npm run dev
```

Stránka poběží na `http://localhost:5173`.

## Produkční build

```bash
npm run build
```

Výstup je ve složce `dist/`. Obsah `dist/` nahraj na svůj server (např. přes FTP nebo rsync). Pro SPA na vlastní doméně nastav na serveru fallback na `index.html`, pokud používáš přesměrování podle cest.

## Náhled buildu

```bash
npm run preview
```

## Struktura

- `index.html` – hlavní stránka (single-page)
- `src/style.css` – Tailwind + vlastní styly
- `src/main.js` – vstupní bod (načte CSS)
- `tailwind.config.js` – barvy (sage, cream), fonty (Outfit, Fraunces)

Obsah odpovídá původnímu webu [odzdravi.cz](https://www.odzdravi.cz/), včetně sekcí: Domů, Kdo jsem, Služby, Ceník, Kontakt, detail služeb a kontaktních údajů.

## SEO a vylepšení

- **Meta tagy:** title s Kroměříž, description, keywords, robots, canonical URL
- **Open Graph a Twitter Card:** pro sdílení na sociálních sítích (přidej `og:image` při nasazení – např. `/og-image.jpg`)
- **Strukturovaná data (JSON-LD):** LocalBusiness + Person pro vyhledávače (adresa, telefon, e-mail)
- **Přístupnost:** `aria-expanded`, `aria-controls`, `aria-label` u mobilního menu; formulář s popisky a `autocomplete`
- **Skripty v `src/main.js`:** přepínání menu a odeslání kontaktního formuláře (mailto + krátká zpětná vazba)
- **Canonical URL** je nastavena na `https://www.odzdravi.cz/` – při jiné doméně uprav v `<head>` v `index.html`
