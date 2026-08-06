import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BaseMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  author?: string;
  image?: string;
  category?: string;
  tags?: string[];
  [key: string]: any;
}

export interface MarkdownDocument<T = BaseMetadata> {
  metadata: T;
  contentHtml: string;
  contentMarkdown: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Lấy tất cả các file markdown trong một thư mục cụ thể (vd: 'pillars', 'articles')
 */
export function getAllSlugs(contentType: string): string[] {
  const dirPath = path.join(contentDirectory, contentType);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(dirPath);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Đọc nội dung và metadata của một file markdown cụ thể
 */
export async function getDocumentBySlug<T = BaseMetadata>(
  contentType: string,
  slug: string
): Promise<MarkdownDocument<T> | null> {
  const fullPath = path.join(contentDirectory, contentType, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Dùng gray-matter để parse phần frontmatter và content
  const matterResult = matter(fileContents);
  
  // Dùng remark để convert markdown sang HTML
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Disable sanitize để cho phép render HTML nhúng nếu cần
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  
  return {
    metadata: {
      slug,
      ...(matterResult.data as Omit<T, 'slug'>),
    } as T,
    contentHtml,
    contentMarkdown: matterResult.content,
  };
}

/**
 * Lấy danh sách tất cả documents của một loại (để làm trang danh sách)
 */
export function getAllDocumentsMeta<T = BaseMetadata>(contentType: string): T[] {
  const slugs = getAllSlugs(contentType);
  
  const documents = slugs.map((slug) => {
    const fullPath = path.join(contentDirectory, contentType, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      slug,
      ...(matterResult.data as Omit<T, 'slug'>),
    } as T;
  });
  
  // Sắp xếp theo ngày giảm dần (mới nhất lên trước)
  return documents.sort((a, b) => {
    if ((a as any).date < (b as any).date) {
      return 1;
    } else {
      return -1;
    }
  });
}
