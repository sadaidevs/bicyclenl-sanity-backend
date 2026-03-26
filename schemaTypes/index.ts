export const schemaTypes = [
    {
        name: 'event',
        title: "Event",
        type: 'document',
        fields: [
            {
                name: 'title',
                title: "Title",
                type: 'string'
            },
            {
                name: 'location',
                title: "Location",
                type: 'string'
            },
            {
                name: 'date',
                title: "Date",
                type: 'date'
            },
            {
                name: 'startTime',
                title: "Start Time",
                type: 'time'
            },
            {
                name: 'experienceClass',
                title: "Experience Class",
                type: 'string'
            }
        ]
    }
]
