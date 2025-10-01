export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color?: string
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  cover: SanityImage
  publishedAt: string
  content?: any[]
  featured?: boolean
  category: Category
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface BlogPostMeta {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  cover: SanityImage
  publishedAt: string
  featured?: boolean
  category: Category
}

