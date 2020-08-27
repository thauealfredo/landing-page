import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    aboutProject: sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
    }
  }
`

export default GET_LANDING_PAGE
