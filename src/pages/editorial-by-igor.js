import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Articles from "../components/Articles";

const Editorial = () => {
  const query = useStaticQuery(graphql`
    {
      firsti {
        articles {
          imageDeeptech {
            url
          }
          editorial
          deepTechTitle
          linkExterno
          textOne {
            html
          }
          textTwo
          subTitle
          textTree
          textFor {
            html
          }
        }
      }
    }
  `);
  const { firsti } = query;

  return (
    <Layout seo="Deep Tech and the future of education">
      <Articles data={firsti.articles[0]} />
    </Layout>
  );
};

export default Editorial
