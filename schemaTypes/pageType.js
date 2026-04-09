export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'section' },
      ]
    }
  ]
}