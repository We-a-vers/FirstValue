import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Company Address',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Company Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Company Phone Number',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Info', // Always display "Goal" as the title
      }
    },
  },
})
