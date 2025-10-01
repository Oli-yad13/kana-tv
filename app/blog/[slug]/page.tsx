import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { client } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import type { Post } from "@/types/blog";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Kana TV",
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [urlFor(post.cover).width(1200).height(630).url()] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.cover ? urlFor(post.cover).width(1200).height(675).url() : '/placeholder.jpg';
  const categoryColor = post.category?.color || '#A80563';

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={coverImageUrl}
          alt={post.cover?.alt || post.title}
          width={1200}
          height={675}
          className="h-[50vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                style={{ 
                  backgroundColor: `${categoryColor}20`, 
                  color: "#fff",
                  borderColor: categoryColor
                }}
              >
                {post.category?.title}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl">
              {post.excerpt}
            </p>
            <div className="mt-6 text-white/60">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-6 sm:px-10 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          {post.content && (
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.map((block, index) => {
                if (block._type === 'block') {
                  return (
                    <div key={index} className="mb-6">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {block.children?.map((child: any, childIndex: number) => {
                        if (child._type === 'span') {
                          let element = child.text;
                          
                          if (child.marks?.includes('strong')) {
                            element = <strong key={childIndex}>{element}</strong>;
                          }
                          if (child.marks?.includes('em')) {
                            element = <em key={childIndex}>{element}</em>;
                          }
                          if (child.marks?.includes('code')) {
                            element = <code key={childIndex} className="bg-white/10 px-1 py-0.5 rounded">{element}</code>;
                          }
                          
                          return element;
                        }
                        return null;
                      })}
                    </div>
                  );
                }
                if (block._type === 'image') {
                  return (
                    <div key={index} className="my-8">
                      <Image
                        src={urlFor(block).width(800).height(450).url()}
                        alt={block.alt || ''}
                        width={800}
                        height={450}
                        className="rounded-lg"
                      />
                      {block.caption && (
                        <p className="text-sm text-white/60 mt-2 text-center">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
