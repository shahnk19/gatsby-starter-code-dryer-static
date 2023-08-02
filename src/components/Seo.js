import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  return (
    <>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
    </>
  );
};
