import { portableTextBlock } from "./shared/portableText"
export default {
  name: 'sharedSection',
  title: 'Shared Section',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Internal Title' },
    { name: 'heading', type: 'string', title: 'Heading' },
    { name: 'body', type: 'array', of: [portableTextBlock] },
    { name: 'image', type: 'image', title: 'Image' },
    {name: 'link', type: 'url', title: 'Link' }
    
  ]
}
