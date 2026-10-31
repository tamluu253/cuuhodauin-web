import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dbg', '/dbg/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot',
          'Applebot-Extended',
          'cohere-ai',
          'Bingbot',
        ],
        allow: '/',
        disallow: ['/api/', '/dbg', '/dbg/'],
      },
    ],
    sitemap: 'https://cuuhodauin.com/sitemap.xml',
  };
}
