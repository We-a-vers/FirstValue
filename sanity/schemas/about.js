import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'goal',
      title: 'About Company Goal',
      type: 'object',
      fields: [
        defineField({
          name: 'goalText',
          title: 'Goal Text',
          type: 'string',
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
      title: 'About Company History',
      type: 'object',
      fields: [
        defineField({
          name: 'historyText',
          title: 'History Text',
          type: 'string',
          description: 'The main text in the company history',
        }),

        defineField({
          name: 'timeline',
          title: 'History Timeline',
          type: 'array',
          of: [
            defineField({
              name: 'achievement',
              title: 'Achievement',
              type: 'object',
              fields: [
                defineField({
                  name: 'year',
                  title: 'Achievement Year',
                  type: 'string',
                  description: 'Year of Achievement',
                }),
                defineField({
                  name: 'description',
                  title: 'Achievement Description',
                  type: 'string',
                  description: 'Description of Achievement',
                }),
              ],
            }),
          ],
          description: 'The main text in the company history',
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

  // Optional: You can add a preview configuration for Home if you like
  preview: {
    prepare() {
      return {
        title: 'About Page', // Always display "Goal" as the title
      }
    },
  },
})
