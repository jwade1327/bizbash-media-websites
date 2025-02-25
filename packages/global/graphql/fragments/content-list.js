const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentListFragment on Content {
  id
  type
  labels
  typeTitled: type(input: { format: titleize })
  shortName
  teaser(input: { maxLength: 500, useFallback: false, truncatedSuffix: "" })
  siteContext {
    path
  }
  company {
    id
    type
    name
    siteContext {
      path
    }
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
  userRegistration {
    isRequired
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
  ... on ContentContact {
    title
    phone
    publicEmail
  }
  ... on ContentWebinar {
    startDate
  }
  ... on ContentEvent {
    startDate
    endDate
  }
}

`;
