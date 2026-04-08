
export default {
  name: 'news',
  title: 'News Article',
  type: 'document',
  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Article Excerpt/Summary',
      type: 'text',
      rows: 3,
      description: 'Brief summary shown in listings (max 150 characters)',
    },
    {
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'relatedEvent',
      title: 'Related Event (Optional)',
      type: 'reference',
      to: [{ type: 'eventItem' }],
    },
    {
      name: 'externalLink',
      title: 'External Source Link (Optional)',
      type: 'url',
      description: 'Link to full article on external site (e.g., CBC News)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: '_updatedAt',
      media: 'featuredImage',
      description: 'excerpt',
    },
  },
};
