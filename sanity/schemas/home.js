import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'homeHeader',
      title: 'Home Page Header',
      type: 'object',
      fields: [
        defineField({
          name: 'headerText',
          title: 'Header Text',
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
          title: 'Description',
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
      title: 'Value Cards',
      type: 'array',
      of: [
        defineType({
          name: 'valueCard',
          title: 'Value Card',
          type: 'object',
          fields: [
            defineField({
              name: 'description',
              title: 'Description',
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
      title: 'Tech & Service Section',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Description for the Tech & Service section',
        }),
        defineField({
          name: 'productCards',
          title: 'Product Cards',
          type: 'array',
          of: [
            defineType({
              name: 'productCard',
              title: 'Product Card',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Image for the product card',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  description: 'Title for the product card',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
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

  // Optional: You can add a preview configuration for Home if you like
  preview: {
    select: {
      title: 'homeHeader.headerText',
    },
  },
})
