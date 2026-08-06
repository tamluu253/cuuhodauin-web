import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/api'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug, ['title', 'description'])

  if (!post) {
    return {
      title: 'Không tìm thấy trang | VNPIS',
    }
  }

  return {
    title: `${post.title} | VNPIS`,
    description: post.description || 'Giải pháp in ấn dữ liệu biến đổi hàng đầu',
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'content',
  ])

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <article className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Quay lại trang chủ
          </Link>
        </div>
        
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </header>

        {/* Cấu hình style CSS cho nội dung bài viết HTML */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-orange-500 prose-img:rounded-xl prose-img:shadow-md mx-auto"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}
