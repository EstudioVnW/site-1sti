import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled";

const Articles = ({ data }) => (
  <>
    <S.Header>
      <S.ColorOne>
        <S.BackButton to={data.linkExterno}>
          <span>
            <StaticImage
              style={{ marginRight: '0.5rem' }}
              src="../../assets/images/icon-return.svg"
              alt="Imagem Ideia"
              layout="fixed"
            />
          </span>
          Insights
        </S.BackButton>
        <S.BoxImage style={{ backgroundImage: `url(${data.imageDeeptech.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '28rem', backgroundPosition: 'center'}}></S.BoxImage>
      </S.ColorOne>
      <S.ColorTwo>
        <span>  
          <p>
            {data.editorial}
          </p>
          <h1>
            {data.deepTechTitle}
          </h1>
        </span>
      </S.ColorTwo>
    </S.Header>
    <S.Container>
      <S.Wrapper>
        <S.SectionOne>
          <S.Linkedin>
            POR IGOR COUTO
            <StaticImage 
              src="../../assets/images/linkedin.svg"
              alt="Imagem Ideia"
              layout="fixed"
            />
            <StaticImage 
              src="../../assets/images/arrow-up-right.svg"
              alt="Seta para link"
              layout="fixed"
            />
          </S.Linkedin>
          <span dangerouslySetInnerHTML={{__html: data.textOne.html}}></span>
          <S.BlockImagensMobile>
            <StaticImage 
              src="../../assets/images/insights-menina3.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={288}
              height={192}
            />
            <StaticImage 
              src="../../assets/images/insights-menina2.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={288}
              height={192}
            />
          </S.BlockImagensMobile>
          <S.BlockImagensDesktop>
            <StaticImage 
              src="../../assets/images/insights-menina3.png"
              alt="Imagem Ideia"
              layout="fixed"
            />
            <StaticImage 
              src="../../assets/images/insights-menina2.png"
              alt="Imagem Ideia"
              layout="fixed"
            />
          </S.BlockImagensDesktop>
          <span>
            <p>
              {data.textTwo}
            </p>
          </span>
        </S.SectionOne>
        <S.SectionTwo>
          <span>
            <h1 style={{ width: '100%' }}>
              {data.subTitle}
            </h1>
            <p>
              {data.textTree}
            </p>
            <StaticImage
              src="../../assets/images/insights-menina1.png"
              alt="Imagem Ideia"
              layout="fixed"
              width={808}
              height={540}
            />
            <span dangerouslySetInnerHTML={{__html: data.textFor.html}}></span>
          </span>
        </S.SectionTwo>
      </S.Wrapper>
    </S.Container>
  </>
);

export default Articles