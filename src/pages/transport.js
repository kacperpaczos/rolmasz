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
        <h1 className={ArticleStyles.yellow}>TRANSPORT - WYNAJEM</h1>
        <p className={ArticleStyles.yellow + " " + ArticleStyles.pcenter}>Firma PHUP ROLMASZ  Sp. z o.o. posiada własną flotę i specjalizuje się w transportach ładunków przestrzennych.</p>
        <p className={ArticleStyles.pbulistb}>Z zagrody Rolnika odbieramy:
          <ul>
            <li>zboża,</li>
            <li>rzepak,</li>
            <li>łubin,</li>
            <li>kukurydzę,</li>
            <li>ziemniaki,</li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>Dostarczamy:
          <ul>
            <li>nawozy sztuczne, w tym nawóz płynny RSM,</li>
            <li>paliwa: olej napędowy, olej opałowy,</li>
          </ul>
        </p>
        <p>W zależności od powierzonego nam ładunku, organizujemy transport szybko, bezproblemowo, dbając o bezpieczne jego dostarczenie. Stawiamy na jakość i dokładność. {"\n"}Zadowolenie Naszych Klientów jest dla nas najważniejszym wyznacznikiem.</p>
        <p className={ArticleStyles.pbulistb}>Kontakt:
          <ul>
          <li>tel. 721 309 303 </li>
            <li>e-mail: <a href="mailto:transport@rolmasz.pl">transport@rolmasz.pl</a> </li>
            <li>tel. 605 261 774 </li>
            <li>e-mail: <a href="mailto:rolmasz@rolmasz.pl">rolmasz@rolmasz.pl</a> </li>
            <li>tel. 601 651 683 </li>
            <li>e-mail: <a href="mailto:paliwa@rolmasz.pl">paliwa@rolmasz.pl</a> </li>
            <li>tel. 601 832 082 </li>
            <li>e-mail: <a href="mailto:sekretariat@rolmasz.pl">sekretariat@rolmasz.pl</a> </li>
          </ul>
        </p>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

