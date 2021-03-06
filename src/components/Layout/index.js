import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import Seo from "../seo";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Main = styled.main`
  @media (min-width: 1440px) {
      font-size: 1.3rem;
  }
`;

export default function Layout({ children, seo }) {
  const query = useStaticQuery(graphql`
    {
      firsti {
        footers {
          globalLogo {
            url
          }
          links
          socialLinks
          title
          paragraph
        }
      }
    }
  `);
  const { firsti } = query;

  return (
    <>
      <Seo title={seo} />
      
      <GlobalStyle />
      <Navigation />
      <Main>{children}</Main>
      <Footer data={firsti.footers[0]} />
    </>
  );
};