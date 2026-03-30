import { defineField, defineType } from "sanity";

export const eventItemType = defineType({
    name: 'eventItem',
    title: 'Event item',
    type: 'document',
    fields: [
        defineField({
            name: 'eventTitle',
            title: 'Event title',
            type: 'string'
        }),
        defineField({
            name:'location',
            title: 'Event location',
            type:'string'
        }),
        defineField({
          name:'eventDate',
          title: 'Event date',
          type:'date'  
        }),
        defineField({
          name:'startTime',
          title: 'Start time',
          type:'time'  
        }),
        defineField({
          name:'experienceClass',
          title: 'Experience class',
          type:'string'  
        })
    ]
})