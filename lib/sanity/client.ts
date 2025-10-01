import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = 'vya0ywny'
const dataset = 'production'
const apiVersion = '2024-01-01'
const token = 'sk3swAMmalxPd80yLv84mwqyLl8xX7WfqwfgoZkT77HboiLOORSCBBbUKEHu22Y42kGW2TzGzyB4oVNP8'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  token: token,
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export default client

