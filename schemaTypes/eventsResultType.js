export default {
    name: 'eventsResult',
    title: 'Events Result',
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
            name: 'relatedEvent',
            title: 'Related Event',
            type: 'reference',
            to: [{ type: 'eventItem' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'resultLink',
            title: 'Result Link',
            type: 'url',
            description: 'Link to full results on external site',
        },
    ],
    preview: {
        select: {
            title: 'relatedEvent.eventTitle',
            subtitle: 'resultLink',
        },
    },
}