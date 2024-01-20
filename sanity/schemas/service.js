import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: '技術和服務',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: '頁面標頭',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: '標題',
          type: 'string',
          description: 'The title of the header.',
        }),
        defineField({
          name: 'description',
          title: '描述',
          type: 'text',
          description: 'The description of the header.',
        }),
      ],
      preview: {
        select: {
          title: 'title',
        },
        prepare({title}) {
          return {
            title: title, // This will use the headerText as the title
          }
        },
      },
    }),

    defineField({
      name: 'products',
      title: '服務及商品',
      type: 'array',
      of: [
        defineType({
          name: 'product',
          title: '服務及商品的資訊',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: '商品/服務的名稱',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: '商品/服務的描述',
              type: 'string',
            }),
            defineField({
              name: 'photos',
              title: '商品/服務的照片',
              type: 'array',
              of: [
                defineField({
                  name: 'photo',
                  title: '照片',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
              validation: (Rule) =>
                Rule.required().min(4).max(4).error('You must provide exactly 4 photos.'),
            }),
            defineField({
              name: 'details',
              title: '商品/服務的細節',
              type: 'array',
              of: [
                defineField({
                  name: 'item',
                  title: '單項細節',
                  type: 'string',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'photos.0.asset', // Assuming you want the first photo as the preview image
            },
            prepare({title, media}) {
              return {
                title,
                media,
              }
            },
          },
        }),
      ],

      preview: {
        select: {
          title: 'products',
        },
        prepare({title}) {
          return {
            title: title, // This will use the headerText as the title
          }
        },
      },
    }),
  ],

  // Optional: You can add a preview configuration for Home if you like
  preview: {
    prepare() {
      return {
        title: 'Service Page', // Always display "Goal" as the title
      }
    },
  },
})
