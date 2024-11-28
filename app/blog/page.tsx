import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog | Boksoondoga - Korean Makgeolli & Traditional Rice Wine',
  description: 'Explore articles about Korean traditional alcohol, makgeolli brewing, rice wine culture, and the art of fermentation.',
  keywords: ['Korean makgeolli', 'traditional rice wine', 'Korean alcohol blog', 'makgeolli brewing'],
};

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage(props: { searchParams: PageProps['searchParams'] }) {
  const params = await props.searchParams;
  const selectedCategory = params?.category || '';
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {selectedCategory || 'Our Blog'}
        </h1>
        <p className="text-xl text-gray-600">
          Exploring Korean Traditional Alcohol Culture
        </p>
      </header>

      {/* Categories Navigation */}
      <nav className="mb-12">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li>
            <Link 
              href="/blog"
              className={`px-4 py-2 rounded-full transition ${!selectedCategory ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              All
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link 
                href={`/blog?category=${category}`}
                className={`px-4 py-2 rounded-full transition ${selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {category} 
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{post.category}</p>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mt-4">{post.date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}