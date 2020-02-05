# Katutasolla

A street art photoblog powered by Gatsby, Contentful and Netlify.

## Development

### Prerequisites

Add contentful space id, access token and host to `.env.development` and `.env.production` respectively.

### `npm run dev`

Runs the project locally. This fetches posts from contentful in preview mode, meaning all posts including unpublished drafts.

### `npm run build`

Runs a production build into `./public`. The result is ready to be put on any static hosting. This project uses Netlify.

## Publishing

### Prerequisites

Add environment variables to Netlify. 

### Template changes

Pushing template changes to github master branch will trigger deployment on netlify.

### Content changes

Publishing content on Contentful will also trigger deployment on netlify.