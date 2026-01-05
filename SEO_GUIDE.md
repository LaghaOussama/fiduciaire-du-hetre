# 🎯 SEO Implementation Guide

## ✅ Checklist SEO Implémentée

### 1. **Meta Tags & Head**

- ✅ Meta description (159 caractères)
- ✅ Meta keywords
- ✅ Open Graph tags (og:title, og:description, og:image, og:url)
- ✅ Twitter Card meta
- ✅ Canonical URL
- ✅ Theme color
- ✅ Author

### 2. **Schema Markup (JSON-LD)**

- ✅ LocalBusiness schema
- ✅ Organization schema
- ✅ ContactPoint schema
- ✅ OpeningHours schema
- ✅ PostalAddress schema

### 3. **Robots.txt & Sitemap**

- ✅ `public/robots.txt` — Contrôle des crawlers
- ✅ `public/sitemap.xml` — Index des pages
- ✅ Image sitemap

### 4. **SEO Component**

- ✅ `src/components/SEO.jsx` — Pour les pages dynamiques

## 📝 Utilisation du Component SEO

### Installation des dépendances

```bash
npm install
```

### Utilisation dans les pages

**Home.jsx :**

```jsx
import SEO from "./SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Fiduciaire du Hêtre - Accueil"
        description="Découvrez nos services fiduciaires professionnels à Romont"
        canonical="https://fiduciaireduhetre.ch"
      />
      {/* Reste du contenu */}
    </>
  );
}
```

**Service.jsx :**

```jsx
import SEO from "./SEO";

export default function Service() {
  return (
    <>
      <SEO
        title="Nos Services - Fiduciaire du Hêtre"
        description="Services comptabilité, fiscalité, conseil entreprise, audit"
        canonical="https://fiduciaireduhetre.ch/service"
      />
      {/* Reste du contenu */}
    </>
  );
}
```

**Contact.jsx :**

```jsx
import SEO from "./SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact - Fiduciaire du Hêtre | Premiers Entretien Gratuit"
        description="Contactez-nous pour une consultation gratuite. Tél: +41 26 652 15 15"
        canonical="https://fiduciaireduhetre.ch/contact"
      />
      {/* Reste du contenu */}
    </>
  );
}
```

**About.jsx :**

```jsx
import SEO from "./SEO";

export default function About() {
  return (
    <>
      <SEO
        title="À Propos - Fiduciaire du Hêtre"
        description="Depuis 1995, Fiduciaire du Hêtre accompagne les entreprises et particuliers"
        canonical="https://fiduciaireduhetre.ch/about"
      />
      {/* Reste du contenu */}
    </>
  );
}
```

## 🖼️ Images Alt Text (Important!)

Ajoute des attributs `alt` descriptifs à TOUTES les images :

```jsx
// ❌ Mauvais
<img src="/logo.svg" />

// ✅ Bon
<img
  src="/logo.svg"
  alt="Logo Fiduciaire du Hêtre - Cabinet fiduciaire suisse"
/>

// ✅ Bon (icons)
<MapPin alt="Localisation Romont" />
<Phone alt="Numéro de téléphone" />
<Mail alt="Adresse email" />
```

## 📊 Outils pour Tester

### Google Tools

- **PageSpeed Insights** : https://pagespeed.web.dev/
- **Search Console** : https://search.google.com/search-console
- **Structured Data Test** : https://schema.org/validate

### SEO Checkers

- **Screaming Frog** (gratuit) : https://www.screamingfrog.co.uk/seo-spider-free/
- **SEO Audit** : https://seositecheckup.com/

### Analytics

- **Google Analytics 4** (gratuit)
- **Hotjar** (heatmaps gratuit)

## 🚀 Checklist Final

Avant de déployer :

- [ ] Tous les titres H1/H2/H3 sont corrects
- [ ] Toutes les images ont un `alt` text
- [ ] Meta descriptions < 160 char
- [ ] Titres pages contiennent mot-clé
- [ ] URLs propres (pas de paramètres inutiles)
- [ ] Pas de 404 ou redirects
- [ ] HTTPS activé
- [ ] Mobile-friendly (testé)
- [ ] Sitemap.xml soumise à Google Search Console
- [ ] Robots.txt correctement configuré
- [ ] Google Business Profile créé
- [ ] 3-5 backlinks locaux (annuaires suisses)

## 📱 Mobile-First Priority

```html
<!-- Index.html - déjà bon ✅ -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- App.css - vérifie breakpoints ✅ -->
@media (max-width: 640px) { /* Mobile first */ } @media (min-width: 1024px) { /*
Desktop */ }
```

## 🎯 Mots-clés Recommandés

**Primaires :**

- Fiduciaire Romont
- Cabinet fiduciaire Suisse
- Comptabilité Romont
- Fiscalité entreprise

**Secondaires :**

- Services comptables Suisse
- Conseil entreprise Romont
- Audit fiduciaire
- Conseil fiscal

## 💡 Tips Bonus

1. **Blog/Articles** — Ajouter du contenu régulier augmente le SEO
2. **Internal Links** — Lier les pages entre elles
3. **Speed** — Vite build optimise déjà beaucoup
4. **Backlinks** — Échanger liens avec sites locaux fiables
5. **Reviews** — Demander avis sur Google My Business

---

**Besoin d'aide ?** Tous les fichiers sont prêts à l'emploi ! 🚀
