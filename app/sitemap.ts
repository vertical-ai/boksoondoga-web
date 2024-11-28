import { MetadataRoute } from 'next'
import { blogPosts } from './data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blogPosts.map((post) => ({
    url: `https://en.boksoondoga.com/blog/${post.slug}`,
    lastModified: new Date(post.lastModified).toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  }))

  const categories = [...new Set(blogPosts.map(post => post.category))]
  const categoryPages = categories.map(category => ({
    url: `https://en.boksoondoga.com/blog/categories/${encodeURIComponent(category.toLowerCase().replace(/ /g, '-'))}`,
    lastModified: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  }))

  return [
    {
      url: 'https://en.boksoondoga.com',
      lastModified: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1
    },
    {
      url: 'https://en.boksoondoga.com/blog',
      lastModified: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9
    },
    ...blogs,
    ...categoryPages,
    {
      url: 'https://en.boksoondoga.com/about',
      lastModified: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://en.boksoondoga.com/space',
      lastModified: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://en.boksoondoga.com/faq',
      lastModified: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: 'https://en.boksoondoga.com/contact',
      lastModified: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.5
    }
  ]
} 