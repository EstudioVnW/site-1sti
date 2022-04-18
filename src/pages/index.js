import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import CallToAction from "../components/Home/CallToAction";
import Purpose from "../components/Home/Purpose";
import Services from "../components/Home/Services";
import Insights from "../components/Home/Insights";
import Attention from "../components/Home/Attention";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CallToAction />
    <Purpose />
    <Services />
    <Insights />
    <Attention />
  </Layout>
);

export default IndexPage
