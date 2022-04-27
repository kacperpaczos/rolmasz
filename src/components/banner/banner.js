import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Menu from "../nav.js"
import * as BannerStyles from "./Banner.module.css"
const Logo = styled.div`
    
    z-index:1000;
    padding-right: 3px;
    padding-bottom: 3px;
    background-color: white;
    border-bottom-right-radius: 3px;
`


const Banner = styled.div`
    width: 100%;
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
`


const RightWing = styled.nav`
    z-index: 99;
    width:100%;
    height:7px;
    border-top-left-radius: -15px;
    border-top-right-radius: -15px;
    position: absolute;
    bottom: -3px;
    right: 0px;
    -webkit-box-shadow: 0px 3px 3px -3px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 3px 3px -3px rgba(66, 68, 90, 1);
    box-shadow: 0px 3px 3px -3px rgba(66, 68, 90, 1);
    
    background-color: #f5ebd4;
    border-top: 4px #3a9104 solid;
`
export default function nav() {
    return (
        <Banner className={BannerStyles.banner}>
            <Logo className={BannerStyles.logo}>
                <StaticImage src="../../images/logo.png" alt="Rolmasz logo" />
            </Logo>
            <StaticImage className={BannerStyles.imagebg} src="../../images/combine-harvester-working-field_342744-555.jpg" alt="Rolmasz logo" />
            <Menu>

            </Menu>
            <RightWing></RightWing>
        </Banner>
    )
}

