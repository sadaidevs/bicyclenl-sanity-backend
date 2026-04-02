import { defineField, defineType } from "sanity"; 

export const richContentType = defineType({
    name: "richContentItem",
    title: "Rich content item",
    type: "document",
    fields: [
        defineField({
            name:"pageName",
            title:"Page name",
            type:"String"
        }),
        defineField({
            name:"pageSection",
            title:"Page section",
            type:"String"
        }),
        defineField({
            name:"sectionContent",
            title:"Section content",
            type:"array",
            of:[{type:"block"}]
        })
    ]
})