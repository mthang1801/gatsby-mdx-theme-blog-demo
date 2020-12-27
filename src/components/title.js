import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

const rootPath = `${__PATH_PREFIX__}`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath)
    return (
      <Styled.h1 css={css({ fontSize: 4, my: 0 })}>
        <Styled.a
          as={Link}
          css={css({
            color: "inherit",
            boxShadow: "none",
            textDecoration: "none",
          })}
          to="/"
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  return (
    <Styled.h3>
      <Styled.a
        as={Link}
        css={css({
          color: "inherit",
          boxShadow: "none",
          textDecoration: "none",
        })}
        to="/"
      >
        {children}
      </Styled.a>
    </Styled.h3>
  )
}

export default Title
