import { graphql } from 'gatsby';

// Common fields for list & single post
export const postCommonFields = graphql`
fragment postCommonFields on ContentfulPost {
  title
  slug
  date(formatString: "D.M.YYYY")
  location
  coordinates {
    lon
    lat
  }
  description {
    description
  }
  tags {
    name
    slug
  }
  category {
    name
    slug
  }
}
`;

export const postListFields = graphql`
  fragment postListFields on ContentfulPost {
    ...postCommonFields
    image {
      fluid(maxWidth: 500, quality: 80) {
        tracedSVG
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`;

export const postFields = graphql`
  fragment postFields on ContentfulPost {
    ...postCommonFields
    image {
      fluid(maxWidth: 1180, quality: 100) {
        tracedSVG
        aspectRatio
        src
        srcSet
        sizes
      }
      file {
        details {
          image {
            height
            width
          }
        }
      }
    }
  }
`;