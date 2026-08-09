import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

export interface Article {
  metadata: ArticleMetadata;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  return fs.readdirSync(articlesDirectory)
    .filter(file => file.endsWith('.md'));
}

export function getArticleBySlug(slug: string): Article | null {
  const decodedSlug = decodeURIComponent(slug);
  const realSlug = decodedSlug.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      category: data.category || 'Khác',
      slug: realSlug,
    },
    content,
  };
}

export function getAllArticles(): ArticleMetadata[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      return article?.metadata;
    })
    .filter((meta): meta is ArticleMetadata => meta !== undefined)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  return articles;
}
