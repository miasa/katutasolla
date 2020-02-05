# Katutasolla

A street art photoblog powered by Gatsby, Contentful and Netlify.

## Development

### Prerequisites

Add contentful space id, access token and host to `.env.development` and `.env.production` respectively.

### `npm run dev`

Runs the project locally. This fetches posts from contentful in preview mode, meaning all posts including unpublished drafts.

### `npm run build`

Runs a production build into `./public`. The result is ready to be put on any static hosting. This project uses Netlify.

### `gatsby clean`

This is useful as a last resort when your local project seems to have issues or content does not seem to be refreshing. Issues this may fix commonly include:

- Stale data, e.g. this file/resource/etc. isn’t appearing
- GraphQL error, e.g. this GraphQL resource should be present but is not
- Dependency issues, e.g. invalid version, cryptic errors in console, etc.
- Plugin issues, e.g. developing a local plugin and changes don’t seem to be taking effect

## Publishing

### Prerequisites

Add environment variables to Netlify. 

### Template changes

Pushing template changes to github master branch will trigger deployment on netlify.

### Content changes

Publishing content on Contentful will also trigger deployment on netlify.