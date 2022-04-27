import React from 'react'
import styled from "styled-components"

import Marquee from "react-fast-marquee";
import times from "lodash/times";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import * as BannerStyle from "./ImgBanerContainer.module.css"
import * as ArticleStyles from "../components/article/article.module.css"

const ImgBanerContainer = styled.div`
    
    padding:0px;
    background-color: white;
    margin: auto;
`

const ImgBanerVContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`
const ImgBanerHContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`
const Parapraph = styled.h3`
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  color: #3a9104;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top:0px;
  margin-bottom:0px;
`
const Akap = styled.p`
  margin-top:0px;
  text-align: center;
  margin: 0px;
  padding:0px;
  padding-top:10px;
`

const ImgBanner2 = styled.div`
  width: 160px;
  height: 90px;
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const ImgBanner = styled.div`
`
const Container = (props) => {
  return <ImgBanerContainer className={BannerStyle.imgBannerContainer}>
    <Akap><b className={ArticleStyles.scolor, ArticleStyles.scolor}>Zapraszamy do współpracy.</b></Akap>
    <Parapraph>FIRMY Z NAMI WSPÓŁPRACUJĄCE:</Parapraph>

    <Marquee pauseOnHober={true} className={BannerStyle.banner}
    >
      <ImgBanerVContainer>
        <ImgBanerHContainer>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>
          
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>

          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>

          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>

          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>

          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>

          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>

          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AnwilGrupaOrlen.png" layout="constrained" alt="Współpraca Anvil Grupa Orlen" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/LOGO_Grupa_Azoty_Zakłady_Azotowe_Pulawy.jpg" layout="constrained" alt="Współpraca Zakłady Azosotwe Puławy" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/police.png" layout="constrained" alt="Współpraca gmina Police" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/AzotyTarnow.png" layout="constrained" layout="constrained" alt="Współpraca Azoty Tarnów" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ZakladyAzotoweWTarnowie.jpeg" layout="constrained" alt="Współpraca Zakładay Azotowe w Tarnowie" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/pkn-orlen-logo.jpg" layout="constrained" alt="Współpraca PKN-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/ekoterm-orlen.jpg" layout="constrained" alt="Współpraca EKOTERM-ORLEN" /></ImgBanner></ImgBanner2>
          <ImgBanner2><ImgBanner><StaticImage src="../images/firmy/logo-LOTOS-OIL-pion.png" layout="constrained" alt="Współpraca LOTOS-OIL" /></ImgBanner></ImgBanner2>
        </ImgBanerHContainer>

      </ImgBanerVContainer>
    </Marquee>
    
    {props.children}
  </ImgBanerContainer>;
};

export default Container;

