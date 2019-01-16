import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <h2>Hello {data.site.siteMetadata.title}</h2>
    <p>From layout!</p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
