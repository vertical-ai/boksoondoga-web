import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '../../data/blogPosts';
import { notFound } from 'next/navigation';
import type { BlogPost } from '../../types/blog';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Boksoondoga Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.imageUrl],
    },
    alternates: {
      canonical: post.canonicalUrl,
    },
  };
}

function JsonLd({ post }: { post: BlogPost }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.imageUrl,
    datePublished: post.date,
    dateModified: post.lastModified,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Boksoondoga',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.jpg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.canonicalUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPost(
  props: PageProps
): Promise<JSX.Element> {
  const post = getPostBySlug(props.params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd post={post} />
      <main className="pt-32 px-4 md:px-8 max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <Link 
              href={`/blog/categories/${encodeURIComponent(post.category)}`}
              className="text-sm text-gray-500 hover:underline"
            >
              {post.category}
            </Link>
            <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <span>{post.author}</span>
              <time>{new Date(post.date).toLocaleDateString()}</time>
            </div>
          </header>

          <div className="prose max-w-none">
            {post.content.map((block, idx) => {
              if (block.type === 'image') {
                return (
                  <div key={idx} className="my-8">
                    <div className="relative h-[400px]">
                      <Image
                        src={block.imageUrl!}
                        alt={block.caption || ''}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    {block.caption && (
                      <p className="text-center text-gray-500 mt-2 italic">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              } else {
                return (
                  <p key={idx} className="mb-6">
                    {block.content}
                  </p>
                );
              }
            })}
          </div>
        </article>
      </main>
    </>
  );
}