export type BlogContentBlock = {
  type: 'paragraph' | 'image';
  content: string;
  caption?: string;
  imageUrl?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentBlock[];
  category: BlogCategory;
  date: string;
  imageUrl: string;
  author: string;
  metaDescription: string;
  keywords: string[];
  lastModified: string;
  canonicalUrl?: string;
  structuredData?: {
    datePublished: string;
    dateModified: string;
    author: {
      name: string;
      type: 'Person';
    };
  };
};

export type BlogCategory = 
  | 'Traditional Brewing Methods'
  | 'Korean Alcohol Culture'
  | 'Makgeolli History'
  | 'Product Knowledge'
  | 'Brewing Tips & Techniques'
  | 'Food Pairing Guides'; 