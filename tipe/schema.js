const { createSchema } = require('@tipe/js')

module.exports = createSchema([
  {
    id: 'post',
    type: 'document',
    label: 'Blog Post',
    previewPath: '/blog/{fields.slug}',
    fields: [
      {id: 'seo', type: 'seo', label: 'SEO'},
      /** 
       * uses a custom component that has a read only
       * computed value from the title field
       */
      {id: 'slug', type: 'string', label: 'Slug', component: 'Slug'},
      {id: 'title', type: 'string', label: 'Title'},
      {id: 'featuredImage', type: 'image', label: 'Featured Image'},
      /**
       * uses a custom component for markdown editing
       */
      {id: 'body', type: 'string', label: 'Body', component: 'Markdown'}
    ]
  },
  {
    id: 'seo',
    type: 'object',
    label: 'SEO',
    /**
     * custom component that renders a google search preview
     */
    component: 'SEO',
    fields: [
      {id: 'title', type: 'string', label: 'Title'},
      {id: 'link', type: 'string', label: 'Link'},
      {id: 'description', type: 'string', label: 'Description'},
    ]
  },
  {
    id: 'homePage',
    type: 'document',
    label: 'Home Page',
    previewPath: '/',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title'
      },
      {
        id: 'description',
        type: 'string',
        label: 'Description',
        component: 'Markdown'
      },
      {
        id: 'cards',
        type: 'cards',
        label: 'Cards'
      }
    ]
  },
  {
    id: 'card',
    type: 'object',
    label: 'Card',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title'
      },
      {
        id: 'description',
        type: 'string',
        label: 'Description'
      },
      {
        id: 'link',
        type: 'string',
        label: 'Link'
      }
    ]
  },
  {
    id: 'cards',
    type: 'array',
    label: 'Cards',
    contains: [
      {type: 'card', label: 'Card'}
    ]
  }
])
