import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../../data/siteContent";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  const { pathname } = useLocation();
  const fullTitle = title.includes("Walking Little Star")
    ? title
    : `${title} | Walking Little Star Daycare`;
  const canonicalUrl = canonical || `https://${siteConfig.domain}${pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        const [attrName, attrVal] = attr.split("=");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name=description", description);

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    setMeta('meta[property="og:title"]', "property=og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property=og:description", description);
    setMeta('meta[property="og:url"]', "property=og:url", canonicalUrl);
    setMeta('meta[property="og:type"]', "property=og:type", "website");
    setMeta(
      'meta[property="og:site_name"]',
      "property=og:site_name",
      siteConfig.businessName
    );
  }, [fullTitle, description, canonicalUrl]);

  return null;
};
