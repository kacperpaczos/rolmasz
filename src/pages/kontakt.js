import React from "react";

import styled from "styled-components";

import Banner from "../components/banner/banner.js";
import ImgBanerContainer from "../components/ImgBanerContainer.js";
import "../styles/global.css";

import Article from "../components/article/article.js";
import * as ArticleStyles from "../components/article/article.module.css";

import Contact from "../components/contact/form-A.js";

const Cardinal = styled.div`

}
`;

export default function index() {
  return (
    <Cardinal>
      <Banner></Banner>
      <Article>
        <h1 className={ArticleStyles.yellow}> KONTAKT </h1>
        <p className={ArticleStyles.yellow + " " + ArticleStyles.pcenter}>
          <b className={ArticleStyles.scolor}> PHUP ROLMASZ Sp.z o.o. </b>
        </p>
        <p className={ArticleStyles.yellow + " " + ArticleStyles.pcenter}>
          ul.Grunwaldzka 1, 76 - 200 Słupsk
        </p>
        <p className={ArticleStyles.pcenter}>
          Pracujemy od poniedziałku do piątku w godz.
          <b className={ArticleStyles.scolor}> 7: 00 - 15: 00 </b>
        </p>
        <p className={ArticleStyles.pbulistb}>
          SEKRETARIAT:
          <ul>
            <li> tel.(59) 843 - 95 - 03 </li>
            <li>
              e - mail:
              <a href="mailto:sekretariat@rolmasz.pl">
                sekretariat @rolmasz.pl
              </a>
            </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          KSIĘGOWOŚĆ FINANSOWA:
          <ul>
            <li> tel.(59) 845 65 51 </li>
            <li>
              e - mail:
              <a href="mailto:roza.nowak@rolmasz.pl">roza.nowak @rolmasz.pl</a>
            </li>
            <li> tel.(59) 845 65 53 </li>
            <li>
              e - mail:
              <a href="mailto:agata.klimczyk@rolmasz.pl">
                agata.klimczyk @rolmasz.pl
              </a>
            </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          KSIĘGOWOŚĆ MATERIAŁOWA:
          <ul>
            <li> tel.(59) 841 79 85 </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          KASA:
          <ul>
            <li> tel.(59) 845 65 54 </li>
            <li>
              e - mail:
              <a href="mailto:rolmaszbank@rolmasz.pl">
                rolmaszbank @rolmasz.pl
              </a>
            </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          PALIWA:
          <ul>
            <li> tel.(59) 845 65 66 </li> <li> tel.(59) 714 07 92 </li>
            <li> tel.601 651 683 </li>
            <li>
              e - mail:
              <a href="mailto:paliwa@rolmasz.pl"> paliwa @rolmasz.pl </a>
            </li>
            <li> zamówienia publiczne: 601 651 683 </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          SKUP / SPRZEDAŻ ZBÓŻ, RZEPAKU, GROCHU, ŁUBINU, KUKURYDZY:
          <ul>
            <li> tel.605 261 774 </li> <li> tel.601 832 082 </li>
            <li>
              e - mail:
              <a href="mailto:rolmasz@rolmasz.pl"> rolmasz @rolmasz.pl </a>
            </li>
            <li>
              tel.601 832 081 - <strong> magazyn Sławno </strong>
            </li>
            <li>
              e - mail:
              <a href="mailto:mag.slawno@rolmasz.pl">mag.slawno @rolmasz.pl</a>
            </li>
            <li>
              <b> magazyn Cetyń </b>
              <ul>
                <li> tel.603 - 075 - 774 </li>
                <li> tel.601 - 832 - 082 </li>
              </ul>
            </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          MATERIAŁ SIEWNY ZBOŻA I RZEPAKU:
          <ul>
            <li> tel.(59) 714 07 94 </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          NAWOZY, RSM:
          <ul>
            <li> tel.601 832 082 </li> <li> tel.(59) 714 07 94 </li>
            <li> tel.605 261 774 </li>
            <li>
              e - mail:
              <a href="mailto:rolmasz@rolmasz.pl"> rolmasz @rolmasz.pl </a>
            </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          HURTOWNIA ALKOHOLI:
          <ul>
            <li> tel.(59) 845 65 52 </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          ŚRODKI OCHRONY ROŚLIN(SKLEP,
          <b className={ArticleStyles.scolor}> GRUNWALDZKA 1, SŁUPSK </b>):
          <ul>
            <li> tel.(59) 845 65 57 </li> <li> tel.601 052 849 </li>
            <li>
              e - mail:
              <a href="mailto:rolmasz.oleje@rolmasz.pl">
                rolmasz.oleje @rolmasz.pl
              </a>
            </li>
          </ul>
        </p>
        <p className={ArticleStyles.pbulistb}>
          USŁUGI TRANSPORTOWE:
          <ul>
            <li> tel.601 832 082 </li> <li> tel.721 309 303 </li>
            <li>
              e - mail:
              <a href="mailto:transport@rolmasz.pl">transport @rolmasz.pl</a>
            </li>
          </ul>
        </p>
      </Article>
      <Article>
        <Contact></Contact>
      </Article>
      <ImgBanerContainer></ImgBanerContainer>
    </Cardinal>
  );
}
