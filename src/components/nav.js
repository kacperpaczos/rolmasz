import React from 'react'
import styled from "styled-components"

import { Link } from "gatsby"

import NavItems from './nav/NavItems'
import * as navStyles from "./navStyle.module.css"
import * as ArticleStyles from "../components/article/article.module.css"
const Menu = styled.section`

    display: flex;
    justify-content: center;
    width:100%;
    position: absolute;
    bottom:0px;

    background-color: transparent;
`


const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position:relative;


    background-color: #f5ebd4;
`

const Item = styled.li`
    list-style: none;
    text-align: center;
    flex-grow: 1;
    min-width: 100px;
    height: 30px;
    line-height: 30px;
    margin: auto;

    display: inline-block;

    padding: 0;

}   
`
const ALink = styled(Link)`
  text-decoration: none;
  font-weight: bold;

  font-size: 1rem;
  padding: 0.5em 0;
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;

  &:before{
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;

    bottom: 0;
    height: 3px;
    width: 0%;
    content: "";
    background-color: #3a9104;
  }
  &:after {
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;

    left: 0;
    top: 0;
    padding: 0.5em 0;
    position: absolute;
    content: attr(data-hover);
    color: red;
    white-space: nowrap;
    max-width: 0%;
    overflow: hidden;
    }
    &:after {
        content: "";
        display: block;
    }
  &:hover:after {
    max-width: 100%;
    }
    &:hover:before{
    opacity: 1;
    width: 100%;
    }

`

export default function nav() {
    return (
        <Menu>
            <Navigation className={navStyles.navigation}>
                <NavItems className={navStyles.Itemv2}>
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/" data-hover="O FIRMIE">O FIRME</ALink></Item>
                    
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/nawozy" data-hover="NAWOZY">NAWOZY</ALink></Item>
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/paliwa" data-hover="PALIWA">PALIWA</ALink></Item>
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/zboza" data-hover="ZBOŻA">ZBOŻA</ALink></Item>
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/transport" data-hover="TRANSPORT - WYNAJEM">TRANSPORT&nbsp;-&nbsp;WYNAJEM</ALink></Item>
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/kontakt" data-hover="KONTAKT">KONTAKT</ALink></Item>
                    <Item className={navStyles.liStyle, navStyles.line}><ALink to="/nagrody" className={ArticleStyles.orange} data-hover="NAGRODY">NAGRODY</ALink></Item>
                    <Item className={navStyles.liStyle}><ALink to="/ogloszenia" className={ArticleStyles.scolor, navStyles.stressLineBottom} data-hover="OGLOSZENIA">OGŁOSZENIA</ALink></Item>
                </NavItems>
            </Navigation>
            
        </Menu>
        
    )
}

