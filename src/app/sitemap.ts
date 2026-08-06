import { MetadataRoute } from 'next';
import { getAllDocumentsMeta } from '@/lib/mdx';

const DOMAIN = 'https://vnpis.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllDocumentsMeta('articles');
  const blogEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const coreHubs = [
    '/solutions/uv-single-pass-printing',
    '/solutions/pad-printing',
    '/solutions/screen-printing',
    '/solutions/industrial-coding',
    '/solutions/variable-data-printing',
    '/products',
    '/products/uv-printers',
    '/products/pad-printers',
    '/products/screen-printers',
    '/products/screen-printers/sj',
    '/products/hot-stamping',
    '/products/hot-stamping/sj',
    '/products/cij-ink',
    '/products/tij-ink',
    '/products/special-inks',
    '/products/industrial-ink',
    '/products/printheads',
    '/products/consumables',
    '/services',
    '/services/variable-data-printing',
    '/services/pad-printing-service',
    '/services/screen-printing-service',
    '/services/machine-rental',
    '/services/machine-repair',
    '/services/color-management',
    '/about',
    '/videos',
    '/faq'
  ];

  const hubEntries: MetadataRoute.Sitemap = coreHubs.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // high priority for hub pages
  }));

  return [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...hubEntries,
    ...blogEntries,
  ];
}
