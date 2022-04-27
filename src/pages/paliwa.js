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
        <h1 className={ArticleStyles.yellow}>Paliwa</h1>
        <p className={ArticleStyles.pbulistb}>Nasza aktualna oferta sprzedaży zawiera następujące najwyższej jakości paliwa pochodzące od najlepszych dostawców:
          <ul>
            <li>OLEJ NAPĘDOWY,</li>
            <li>OLEJ OPAŁOWY,</li>
            <li>BENZYNA BEZOŁOWIOWA,</li>
            <li>GAZ LPG.</li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulist}>Kontakt ds. sprzedaży paliw:
          <ul>
            <li><strong>Tel. stacjonarny: </strong>(59) 845 65 66, (59) 714 07 92</li>
            <li><strong>Tel. komórkowy: </strong>601 651 683,</li>
            <li><strong>Zamówienia publiczne: </strong>601 651 683,</li>
            <li><strong>Zamówienia elektroniczne: </strong><a href="mailto:paliwa@rolmasz.pl">paliwa@rolmasz.pl</a>.</li>
          </ul>
        </p>

        <p className={ArticleStyles.pcenter}>
          <b>Sieć stacji paliw pozwala na stałą dostawę / odbiór paliw w dogodny dla klienta sposób.</b>{"\n"}
          STACJE PALIW <b className={ArticleStyles.scolor}>ROLMASZ Sp. z o.o.</b>
          <table>
            <tr>
              <th>Adres</th>
              <th>Kontakt</th>
            </tr>
            <tr>
              <td>Słupsk, ul. Poznańska 12</td>
              <td>(59) 714 07 90</td>
            </tr>
            <tr>
              <td>Słupsk, ul. Konarskiego 1</td>
              <td>59) 844 44 61</td>
            </tr>
            <tr>
              <td>Słupsk, ul. Fabryczna 1</td>
              <td>59) 843 52 31</td>
            </tr>
            <tr>
              <td>Darłowo, ul. Dąbrowskiego 1</td>
              <td>(94) 314 21 21</td>
            </tr>
            <tr>
              <td>Miastko, ul. Koszalińska 14</td>
              <td>603 101 007</td>
            </tr>
            <tr>
              <td>Główczyce, ul. Szosa Słupska 3a</td>
              <td>(59) 811 10 26</td>
            </tr>

          </table>
        </p>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

