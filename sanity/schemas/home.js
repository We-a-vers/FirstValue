import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: '主頁面',
  type: 'document',
  fields: [
    defineField({
      name: 'homeHeader',
      title: '主頁面標頭',
      type: 'object',
      fields: [
        defineField({
          name: 'headerText',
          title: '標題',
          type: 'string',
          description: 'The main text in the header',
        }),
        defineField({
          name: 'slogan',
          title: 'Short Slogan',
          type: 'string',
          description: 'A short and catchy slogan',
        }),
        defineField({
          name: 'description',
          title: '描述',
          type: 'text',
          description: 'A longer description that elaborates on the header',
        }),
      ],
      // Optional: You can add a preview configuration for homeHeader if you like
      preview: {
        select: {
          title: 'homeHeader.headerText',
        },
        prepare({title}) {
          return {
            title: title, // This will use the headerText as the title
            subtitle: 'Home Page Configuration', // You can use a static subtitle
          }
        },
      },
    }),

    defineField({
      name: 'valueCards',
      title: '核心價值',
      type: 'array',
      of: [
        defineType({
          name: 'valueCard',
          title: '核心價值',
          type: 'object',
          fields: [
            defineField({
              name: 'description',
              title: '描述',
              type: 'text',
              description: 'Description for the value card',
            }),
          ],
          // Optional: Preview configuration for valueCard
          preview: {
            select: {
              title: 'description',
            },
          },
        }),
      ],
      description: 'Cards displaying values with descriptions',
    }),

    defineField({
      name: 'techServiceSection',
      title: '服務與技術預覽',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: '描述',
          type: 'text',
          description: 'Description for the Tech & Service section',
        }),
        defineField({
          name: 'productCards',
          title: '服務與技術資訊',
          type: 'array',
          of: [
            defineType({
              name: 'productCard',
              title: '單項資訊',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: '照片',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Image for the product card',
                }),
                defineField({
                  name: 'title',
                  title: '標題',
                  type: 'string',
                  description: 'Title for the product card',
                }),
                defineField({
                  name: 'description',
                  title: '描述',
                  type: 'text',
                  description: 'Description for the product card',
                }),
              ],
              // Optional: Preview configuration for productCard
              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                },
              },
            }),
          ],
          description: 'Product cards for the Tech & Service section',
        }),
      ],
      // Optional: Preview configuration for techServiceSection
      preview: {
        select: {
          title: 'title',
        },
      },
    }),
  ],

  validation: (Rule) => Rule.required().min(1).max(1).error('You must provide exactly 1 data.'),

  // Optional: You can add a preview configuration for Home if you like
  preview: {
    select: {
      title: 'homeHeader.headerText',
    },
  },
})
