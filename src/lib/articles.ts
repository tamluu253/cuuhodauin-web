import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  printhead: string;
  slug: string;
  draft?: boolean;
  status?: string;
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

  let description = data.description;
  if (!description || description.trim() === '') {
    const rawLines = content.split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#') && !l.startsWith('!') && !l.startsWith('---'));
    const cleanLine = (rawLines[0] || '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/[\*\_`#]/g, '')
      .trim();
    description = cleanLine.slice(0, 160) || `Tìm hiểu chi tiết về ${data.title || 'cứu hộ đầu in'} tại VNPIS Lab.`;
  }

  return {
    metadata: {
      title: data.title || 'Untitled',
      description,
      date: data.date || new Date().toISOString(),
      category: data.category || 'Khác',
      printhead: data.printhead || 'Khác',
      slug: realSlug,
      draft: data.draft ?? false,
      status: data.status || 'published',
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
