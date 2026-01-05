import { useEffect } from "react";

/**
 * Component for managing SEO meta tags dynamically
 * Updates document head with title and meta tags
 * Usage: <SEO title="..." description="..." />
 */
export function SEO({
  title = "Fiduciaire du Hêtre - Comptabilité & Fiscalité Romont",
  description = "Cabinet fiduciaire suisse à Romont. Services comptabilité, fiscalité, conseil. Premier entretien gratuit.",
  canonical = "https://fiduciaireduhetre.ch",
  ogImage = "https://fiduciaireduhetre.ch/assets/TreeOfLifeClipart.svg",
  ogType = "website",
  author = "Fiduciaire du Hêtre",
}) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMeta = (name, content, property = false) => {
      let element = property
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update standard meta tags
    updateMeta("description", description);
    updateMeta("author", author);

    // Update canonical
    let canonical_link = document.querySelector('link[rel="canonical"]');
    if (!canonical_link) {
      canonical_link = document.createElement("link");
      canonical_link.rel = "canonical";
      document.head.appendChild(canonical_link);
    }
    canonical_link.href = canonical;

    // Update Open Graph tags
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:url", canonical, true);

    // Update Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);
  }, [title, description, canonical, ogImage, ogType, author]);

  // Component doesn't render anything visible
  return null;
}

export default SEO;
