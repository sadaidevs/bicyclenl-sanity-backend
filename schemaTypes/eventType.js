import { defineField, defineType } from "sanity";

export const eventItemType = defineType({
  name: "eventItem",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "eventTitle",
      title: "Event title",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Event location",
      type: "string",
    }),
    defineField({
      name: "eventDate",
      title: "Event date",
      type: "datetime",
    }),
    defineField({
      name: "description",
      title: "Event description",
      type: "text",
      rows: 4,
      description: "Brief summary shown in listings (max 300 characters)",
    }),
    defineField({
      name: "experienceClass",
      title: "Experience class",
      type: "string",
      options: {
        list: [
          { title: "beginner", value: "Beginner" },
          { title: "intermediate", value: "Intermediate" },
          { title: "experienced", value: "Experienced" },
        ],
      },
    }),
    defineField({
      name: "discipline",
      title: "Discipline",
      type: "string",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Link name",
              type: "string",
              description: "Examples: Registration link, Results link",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),
  ],
});