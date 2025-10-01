import { groq } from 'next-sanity'

// Get all blog posts with category information
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    cover,
    publishedAt,
    featured,
    category-> {
      title,
      slug,
      color
    }
  }
`

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    cover,
    publishedAt,
    category-> {
      title,
      slug,
      color
    }
  }
`

// Get posts by category
export const postsByCategoryQuery = groq`
  *[_type == "post" && category._ref == $categoryId] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    cover,
    publishedAt,
    category-> {
      title,
      slug,
      color
    }
  }
`

// Get single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    cover,
    publishedAt,
    content,
    featured,
    category-> {
      title,
      slug,
      color
    },
    seo
  }
`

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`

// Get category by slug
export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    color
  }
`

