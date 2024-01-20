import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: '關於我們',
  type: 'document',
  fields: [
    defineField({
      name: 'goal',
      title: '企業願景',
      type: 'object',
      fields: [
        defineField({
          name: 'goalText',
          title: '願景',
          type: 'text',
          description: 'The main text in the company goal',
        }),
      ],
      preview: {
        select: {
          title: 'goalText',
        },
        prepare({title}) {
          return {
            title: title, // This will use the headerText as the title
          }
        },
      },
    }),

    defineField({
      name: 'history',
      title: '企業歷史',
      type: 'object',
      fields: [
        defineField({
          name: 'historyText',
          title: '歷史',
          type: 'text',
          description: 'The main text of the company history',
        }),

        defineField({
          name: 'timeline',
          title: '歷史時間線',
          type: 'array',
          of: [
            defineField({
              name: 'achievement',
              title: '成就',
              type: 'object',
              fields: [
                defineField({
                  name: 'year',
                  title: '年份',
                  type: 'string',
                  description: 'Year of Achievement',
                }),
                defineField({
                  name: 'description',
                  title: '說明',
                  type: 'text',
                  description: 'Description of Achievement',
                }),
              ],
            }),
          ],
          description: 'The main text of the company history',
        }),
      ],
      preview: {
        select: {
          title: 'historyText',
        },
        prepare({title}) {
          return {
            title: title, // This will use the headerText as the title
          }
        },
      },
    }),
  ],
  validation: (Rule) => Rule.required().min(1).max(1).error('You must provide exactly 1 data.'),

  // Optional: You can add a preview configuration for Home if you like
  preview: {
    prepare() {
      return {
        title: 'About Page', // Always display "Goal" as the title
      }
    },
  },
})
