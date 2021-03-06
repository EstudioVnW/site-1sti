import React from "react";

import * as S from "./styled"

import Header from "../Header";
import BlockImages from "../BlogInsightsImages";
import CardsInsigts from "../CardsInsights";

const Insights = () => (
  <S.Container>
    <S.Wrapper>
      <Header title='Insights' color='#000' />
      <BlockImages />
      <CardsInsigts />
      <S.MoreButton>Load more</S.MoreButton>
    </S.Wrapper>
  </S.Container>
)

export default Insights