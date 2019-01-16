import React from "react";
import styles from "./about.module.css";
import Container from "../components/container";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default ({ data }) => (
  <Layout>
    <Container>
      <h2>It's all about the {data.site.siteMetadata.title}</h2>
      <User
        username="Robert C. Martin"
        avatar="http://2017.agilesummit.gr/wp-content/uploads/2017/04/UncleBob.jpg"
        excerpt="The unique Uncle Bob"
      />
      <User
        username="Kent Beck"
        avatar="http://media.simplecast.com/episode/image/11199/small_1441192692-artwork.jpg"
        excerpt="Never underestimate Kent"
      />
    </Container>
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
