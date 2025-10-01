import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { studioClient } from './lib/sanity/studio-client'

import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'kana-tv-blog',
  title: 'Kana TV Blog CMS',

  projectId: 'vya0ywny',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentTypeList('post')
                  .title('Blog Posts')
                  .filter('_type == "post"')
              ),
            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category')
                  .title('Categories')
                  .filter('_type == "category"')
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !['post', 'category'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio',

  api: {
    projectId: 'vya0ywny',
    dataset: 'production',
    useCdn: false,
  },

  client: studioClient,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vite: (config: any) => ({
    ...config,
    css: {
      postcss: false,
    },
  }),
})

