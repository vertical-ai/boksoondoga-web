import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'traditional-brewing-methods',
    title: 'The Art of Traditional Korean Brewing',
    excerpt: 'Discover the ancient methods of Korean makgeolli brewing...',
    content: 'The art of brewing traditional Korean makgeolli has been passed down through generations...',
    category: 'Traditional Brewing Methods',
    date: '2024-01-15',
    imageUrl: '/images/blog/traditional-brewing.jpg',
    author: 'Kim Min-ji',
    metaDescription: 'Learn about traditional Korean makgeolli brewing methods and techniques.',
    keywords: ['traditional brewing', 'Korean makgeolli', 'brewing methods'],
    lastModified: '2024-01-15',
    canonicalUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/traditional-brewing-methods`
  }
];

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return Promise.resolve(blogPosts.find(post => post.slug === slug));
} 