import React from 'react'

import styled from "styled-components"

import Banner from "../components/banner/banner.js"
import ImgBanerContainer from "../components/ImgBanerContainer.js"
import "../styles/global.css"

import Article from "../components/article/article.js"
import * as ArticleStyles from "../components/article/article.module.css"

const Cardinal = styled.div`

}
`

export default function index() {
  return (
    <Cardinal>
      <Banner>
      </Banner>
      <Article>
        <h1 className={ArticleStyles.yellow}>NAWOZY</h1>
        <p className={ArticleStyles.pbulistb}>W naszej ofercie sprzedaży znajdują się następujące nawozy pojedyncze, wieloskładnikowe i kompleksowe pochodzące zarówno od producentów krajowych jak i zagranicznych:
          <ul>
            <li>SALETRA AMONOWA,</li>
            <li>SÓL POTASOWA,</li>
            <li>CANWIL,</li>
            <li>POLIFOSKA,</li>
            <li>AGROFOSKA,</li>
            <li>WAP-MAG,</li>
            <li>MOCZNIK,</li>
            <li>KREDA WAPNIAK,</li>
            <li>AMOFOSKA,</li>
            <li>NPK 5-20-30,</li>
            <li>SIARCZAN MAGNEZU – SIEDMIOWODNY,</li>
            <li>SUPERFOSFAT,</li>
            <li>AMOFOSMAG,</li>
            <li>FOSFORAN AMONU,</li>
            <li>SIARCZAN AMONU,</li>
            <li>RSM 32%.</li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>NAWOZY, RSM:
          <ul>
            <li>tel. 601 832 082</li>
            <li>tel. (59) 714 07 94 </li>
            <li>tel. 605 261 774 </li>
            <li>e-mail: <a href="mailto:rolmasz@rolmasz.pl">rolmasz@rolmasz.pl</a> </li>
          </ul>
        </p>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

