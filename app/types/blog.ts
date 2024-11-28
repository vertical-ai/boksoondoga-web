type ContentBlock = {
  type: 'paragraph' | 'image';
  content?: string;
  imageUrl?: string;
  caption?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  category: BlogCategory;
  date: string;
  imageUrl: string;
  author: string;
  metaDescription: string;
  keywords: string[];
  lastModified: string;
  canonicalUrl?: string;
};

export type BlogCategory = 
  | 'Traditional Brewing Methods'
  | 'Korean Alcohol Culture'
  | 'Makgeolli History'
  | 'Product Knowledge'
  | 'Brewing Tips & Techniques'
  | 'Food Pairing Guides'
  | 'Awards & Recognition'; 