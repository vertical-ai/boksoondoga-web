import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'traditional-brewing-methods',
    title: 'The Art of Traditional Korean Brewing',
    excerpt: 'Discover the ancient methods of Korean makgeolli brewing...',
    content: [
      {
          type: 'image',
          imageUrl: '/images/blog/hero-image.jpg',
          caption: 'Traditional Korean brewing vessels at Boksoondoga',
          content: ''
      },
      {
        type: 'paragraph',
        content: 'The art of brewing traditional Korean makgeolli has been passed down through generations...'
      },
      {
          type: 'image',
          imageUrl: '/images/blog/brewing-process.jpg',
          caption: 'Hand-mixing rice with traditional techniques',
          content: ''
      },
      {
        type: 'paragraph',
        content: 'Each step of the brewing process requires careful attention...'
      }
    ],
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