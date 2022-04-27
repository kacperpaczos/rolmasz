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
        <h1 className={ArticleStyles.yellow}>ZBOŻA</h1>
        <p className={ArticleStyles.pbulist}><b>
          Współpracujesz z nami – zdobywasz:</b>
          <ul>
            <li>możliwość sprzedaży i zakupu nasion zbóż i roślin oleistych,</li>
            <li>elastyczny termin płatności dobierany do Twoich potrzeb,</li>
            <li>towar dostarczany w workach, big bagu lub luzem – zgodnie z Twoimi preferencjami,</li>
            <li>dostęp do szerokiej gamy komponentów paszowych,</li>
            <li>pewną dostawę,</li>
            <li>aktualną informację o ofercie, tendencjach i cenach.</li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>Oferujemy całoroczny skup zbóż w zestawach 25-tonowych obejmujący:
          <ul>
            <li>żyto,</li>
            <li>pszenicę,</li>
            <li>pszenżyto,</li>
            <li>jęczmień,</li>
            <li>owies,</li>
            <li>jak i rzepak, łubin, groch i kukurydzę.</li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>Obowiązują ceny dnia dostępne pod numerami telefonów:
          <ul>
            <li>601 832 082,</li>
            <li>605 261 774,</li>
            <li>(59) 714 07 94.</li>
          </ul>
        </p>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

