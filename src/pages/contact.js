import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div>
      <h2> Email us at the address below:</h2>
      <p>
        <a href="mailto:crafts-academy@me.com">crafts-academy@me.com</a>
      </p>
      <h2> For GraphQL transparency reasons:</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>modifiedTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.name}</td>
              <td>{node.modifiedTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          modifiedTime
        }
      }
    }
  }
`;
