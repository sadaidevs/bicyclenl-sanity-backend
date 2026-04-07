/**
 * News Article Schema
 * 
 * Defines the structure for news article documents in Sanity CMS.
 * This schema manages comprehensive news content including articles, metadata,
 * and relationships to other content types.
 * 
 * @schema {document} news
 * 
 * @fields
 * - title (string, required): The main headline of the article
 * - slug (string, required): URL-friendly identifier auto-generated from title (max 96 chars)
 * - excerpt (text): Brief summary displayed in listings (max 150 characters)
 * - content (blockContent, required): Rich text article body using portable text format
 * - featuredImage (image): Hero image with hotspot support for responsive cropping
 * - author (string): Author name
 * - tags (array): String-based tags for additional metadata
 * - publishedAt (datetime, required): Publication timestamp
 * - relatedEvent (reference, optional): Link to associated event document
 * - externalLink (url, optional): Reference URL to external article source
 * 
 * @preview
 * Displays article title with author name and formatted publish date as subtitle,
 * alongside the featured image thumbnail
 */

```json sample
{
    "title": "Breaking: New Cycling Infrastructure Announced",
    "slug": "breaking-new-cycling-infrastructure-announced",
    "excerpt": "The city council has approved a new $5M cycling infrastructure project...",
    "content": [
        {
            "text": "Article body content in portable text format..."
        }
    ],
    "featuredImage": {
        "url": "image-url-here"
    },
    "author": "John Doe",
    "tags": ["cycling", "infrastructure", "news"],
    "publishedAt": "2024-01-15T10:30:00Z",
    "relatedEvent": "event-id-reference",
    "externalLink": "https://external-source.com/article"
}
```