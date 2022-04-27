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
      <Article >
        <h1 className={ArticleStyles.yellow}>NAGRODY I WYRÓŻNIENIA</h1>
        <section>
            <h3 className={ArticleStyles.black}>2019</h3>
            <h3 className={ArticleStyles.orange}>FORUM FIRM RODZINNYCH FORBES</h3>
          <p>Prezes Zygmunt Bigus znajduje się w gronie 500 najlepiej zarządzających menadżerów w{'\u00A0'}Polsce.</p>
        </section>
        <section>
            <h3 className={ArticleStyles.black}>2013</h3>
            <h3 className={ArticleStyles.orange}>500 MENEDŻERÓW „Puls Biznesu”</h3>
          <p><b className={ArticleStyles.scolor}>PHUP „ROLMASZ Sp. z o.o.”</b> otrzymała wyróżnienie w rankingu miesięcznika Forbes FORUM FIRM RODZINNYCH 2013.</p>
        </section>
        <section>
            <h3 className={ArticleStyles.black}>2012</h3>
            <h3 className={ArticleStyles.orange}>GAZELE BIZNESU</h3>
          <p>Dziennik "Puls Biznesu" potwierdza przynależność firmy <b className={ArticleStyles.scolor}>PHUP „ROLMASZ Sp. z o.o.”</b> do elitarnego klubu Gazel Biznesu grona najdynamiczniej rozwijających się firm.</p>
        </section>
        <section>
            <h3 className={ArticleStyles.black}>2006</h3>
            <h3 className={ArticleStyles.orange}>SREBRNY NIEDŹWIEDŹ</h3>
          <p>Nominacja do Nagrody Głównej "SREBRNY NIEDŹWIEDŹ 2005" Lider Promocji Słupskiej Gospodarki.</p>
        </section>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

