import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        // Nuxt Content v3 does not ignore dotfiles by default.
        exclude: ['**/.*'],
      },
    }),
  },
})
