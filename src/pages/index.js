import React from 'react'
import {Helmet} from "react-helmet";

import styled from "styled-components"

import Banner from "../components/banner/banner.js"
import ImgBanerContainer from "../components/ImgBanerContainer.js"
import Data from "../components/DataContainer.js"

import "../styles/global.css"

import Article from "../components/article/article.js"
import * as ArticleStyles from "../components/article/article.module.css"

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Cardinal = styled.div`

}
`

export default function index() {
  return (
    <Cardinal>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rolmasz - strona główna</title>
        <meta name="description" content="Jesteśmy liderem rynku sprzedaży paliw, olejów, nawozów, środków ochrony roślin, zbóż, kukurydzy, grochu, łubinu oraz rzepaku na obszarze Pomorza Środkowego. Poznaj nas!"/>
        <meta name="keywords" content="Słupsk, oleje, rzepak, rolmasz, pomorze, paliwa, ochrona roślin"/>
        <meta name="author" content="Kacper Paczos"/>
      </Helmet>
      <Banner>
      </Banner>
      <Article>
        <h1 className={ArticleStyles.yellow}>O FIRMIE</h1>
        <p className={ArticleStyles.yellow}>
        <BrowserView>
          <Data></Data>
        </BrowserView>
        Jesteśmy jedną z największych a zarazem najstarszych firm Pomorza Środkowego. Zajmujemy się głównie kompleksową obsługą klienta indywidualnego w zakresie sprzedaży paliw, olejów, nawozów, środków ochrony roślin, zbóż, kukurydzy, grochu, łubinu oraz rzepaku.
        Posiadamy rozwiniętą <b>własną</b> sieć stacji paliw, <b>własny</b> transport i <b>własne</b> magazyny.</p>
        <p className={ArticleStyles.pcenter, ArticleStyles.yellow}> Niezmiennie od roku 1990 będącego początkiem działalności firmy, staramy się zapewnić Państwu najwyższy standard obsługi.</p>

        <p className={ArticleStyles.pbulistb}>Główną gałęzią działalności firmy jest dystrybucja paliw poprzez szeroko rozwiniętą sieć sprzedaży hurtowej jak i detalicznej. {"\n"}Posiadamy stacje paliw w następujących miejscowościach:
          <ul>
            <li>Słupsku,</li>
            <li>Darłowie,</li>
            <li>Miastku,</li>
            <li>Główczycach,</li>
            <li>Sławnie.</li>
          </ul>
        </p>


        <p className={ArticleStyles.pbulistb}>Obecnie zajmujemy się także kontraktacją oraz skupem:
          <ul>
            <li>żyta,</li>
            <li>pszenicy,</li>
            <li>jęczmienia,</li>
            <li>owsa,</li>
            <li>pszenżyta,</li>
            <li>rzepaku,</li>
            <li>kukurydzy,</li>
            <li>grochu.</li>
          </ul>
        </p>


        <p className={ArticleStyles.pbulistb}>W zawieranych umowach naszym dostawcom gwarantujemy:
          <ul>
            <li>najlepsze ceny,</li>
            <li>krótkie terminy płatności,</li>
            <li>szybki odbiór towaru.</li>
          </ul>
        </p>



        <p>Od lat zaopatrujemy w zboża i rośliny oleiste największe olejarnie i mieszalnie w kraju, a także fermy
          i indywidualne gospodarstwa. Nabywcami naszych produktów są producenci żywności i pasz, wymagający zagwarantowania wysokiej jakości, dlatego dbamy, aby sprzedawane przez nas produkty były najlepszego sortu.</p>
        
        <MobileView>
          <h3>DANE REJESTROWE</h3>
          <p className={ArticleStyles.pcenter}>
            <b className={ArticleStyles.scolor}>PHUP ROLMASZ Sp. z o.o.</b> {"\n"}
            ul. Grunwaldzka 1{"\n"}
            76-200 Słupsk{"\n"}
            Sąd Rejonowy Gdańsk-Północ w Gdańsku{"\n"}
            VIII Wydział Gospodarczy Krajowego Rejestru Sądowego{"\n"}
            Nr KRS 0000169008, w którym przechowywana jest dokumentacja Spółki{"\n"}
            NIP <b>839-020-24-18</b>, REGON <b>005328426</b>{"\n"}
            Kapitał zakładowy 1.502.524.14 PLN{"\n"}
          </p>
        </MobileView>
      </Article>
      <ImgBanerContainer>

      </ImgBanerContainer>
    </Cardinal>

  )
}

