import { createClient } from 'next-sanity'

const projectId = 'vya0ywny'
const dataset = 'production'
const apiVersion = '2024-01-01'
const token = 'sk3swAMmalxPd80yLv84mwqyLl8xX7WfqwfgoZkT77HboiLOORSCBBbUKEHu22Y42kGW2TzGzyB4oVNP8'

export const studioClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token,
  perspective: 'published',
})

export default studioClient
