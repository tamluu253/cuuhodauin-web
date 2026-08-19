import { MetadataRoute } from 'next';
import { getAllDocumentsMeta } from '@/lib/mdx';

const DOMAIN = 'https://cuuhodauin.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllDocumentsMeta('articles');
  const blogEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/kien-thuc/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/kien-thuc`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
