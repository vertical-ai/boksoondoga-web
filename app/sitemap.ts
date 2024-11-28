import { MetadataRoute } from 'next'
import { blogPosts } from './data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  // Map blog posts with consistent priorities
  const blogs = blogPosts.map((post) => ({
    url: `https://en.boksoondoga.com/blog/${post.slug}`,
    lastModified: new Date(post.lastModified).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8, // High priority for all evergreen content
  }))

  // Create category pages
  const categories = [...new Set(blogPosts.map(post => post.category))]
  const categoryPages = categories.map(category => ({
    url: `https://en.boksoondoga.com/blog/categories/${category.toLowerCase().replace(/ /g, '-')}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://en.boksoondoga.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://en.boksoondoga.com/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...blogs,
    ...categoryPages,
    {
      url: 'https://en.boksoondoga.com/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://en.boksoondoga.com/space',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://en.boksoondoga.com/faq',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://en.boksoondoga.com/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
} 