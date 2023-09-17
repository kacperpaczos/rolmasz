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
        <h1 className={ArticleStyles.yellow}>OGŁOSZENIA</h1>

        <section>
            <h3>Nieruchomość za stacją paliw</h3>
          <p className={ArticleStyles.pbulistb}>Oferujemy do sprzedaży dochodową nieruchomość ze stacją paliw
          i marketem „Biedronka” (franczyza) w:
            <ul>
              <li>76-220 Główczyce, ul. Szosa Słupska 3A.</li>
            </ul>
          </p>
          <p>Telefon do kontaktu: <strong>601 832 082</strong>.</p>
        </section>
        {/*<section>
            <h3>Stacja Paliw</h3>
          <p className={ArticleStyles.pbulistb}>Firma PHUP Rolmasz Sp. z o.o. sprzedaje Stację Paliw z dużą działką:
            <ul>
              <li>76-200 Słupsk, przy ul. Poznańskiej 12.</li>
            </ul>
          </p>
          <p>Telefon do kontaktu: <strong>601 832 082</strong>.</p>
        </section>*/}
        <section>
            <h3>Sprzedam kompleksowe wyposażenie ze stali nierdzewnej</h3>
          <p className={ArticleStyles.pbulistb}>Sprzedam kompleksowe wyposażenie ze stali nierdzewnej dużej kuchni i baru tj.:
            <ul>
              <li>lady chłodnicze</li>
              <li>lady grzewcze</li>
              <li>witryny</li>
              <li>stoły robocze</li>
              <li>szafy</li>
              <li>duży piec gazowy</li>
              <li>piec elektryczny do wypieku</li>
              <li>krajalnice</li>
              <li>wagi i półki</li>
            </ul>
          </p>
          <p>Telefon do kontaktu: <strong>601 832 082</strong>.</p>
        </section>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

