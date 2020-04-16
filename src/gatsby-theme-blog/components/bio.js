/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content"
import avatar from "../../../assets/avatar.png"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
  } = data
  console.log(data)
  return (
    <Flex css={css({ mb: 4, alignItems: `center` })}>
      <img
        src={avatar}
        alt={author}
        css={css({
          mr: 2,
          mb: 0,
          width: 48,
          minWidth: 48,
          borderRadius: 99999,
        })}
      />

      <Styled.div>
        <BioContent />
      </Styled.div>
    </Flex>
  )
}

const bioQuery = graphql`
  query bioQueryAndBioQuery {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(relativePath: { eq: "/assets/avatar.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
