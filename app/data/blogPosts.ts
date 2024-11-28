import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'traditional-brewing-methods',
    title: 'The Art of Traditional Korean Brewing',
    excerpt: 'Discover the ancient methods of Korean makgeolli brewing that have been passed down through generations.',
    content: 'Full article content here...',
    category: 'Traditional Brewing Methods',
    date: '2024-01-15',
    imageUrl: '/images/blog/traditional-brewing.jpg',
    author: 'Kim Min-ji',
    metaDescription: 'Learn about traditional Korean makgeolli brewing methods and techniques.',
    keywords: ['traditional brewing', 'Korean makgeolli', 'brewing methods'],
    lastModified: '2024-01-15'
  }
  // Add more blog posts as needed
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
} 