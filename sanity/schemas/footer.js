import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: '頁尾',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: '公司地址',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: '公司電子郵件',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: '公司電話號碼',
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
