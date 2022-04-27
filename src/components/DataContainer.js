import React from "react"
import * as DataStyles from "./DataStyles.module.css"
import * as ArticleStyles from "../components/article/article.module.css"

export default function NavItems({ children }) {
    return (
        <div className={DataStyles.data}>
            <h3>DANE REJESTROWE</h3>
            <p className={ArticleStyles.pcenter}>
                <b className={ArticleStyles.scolor}>PHUP ROLMASZ{"\n"}Sp. z o.o.</b>{"\n"}{"\n"}
                ul. Grunwaldzka 1{"\n"}
                76-200 Słupsk{"\n"}
                Sąd Rejonowy{"\n"}Gdańsk-Północ w Gdańsku{"\n"}{"\n"}
                VIII Wydział Gospodarczy Krajowego Rejestru Sądowego{"\n"}
                Nr KRS 0000169008,{"\n"}w którym jest przechowywana dokumentacja Spółki{"\n"}
                NIP <b>839-020-24-18</b>,{"\n"}REGON <b>005328426</b>{"\n"}{"\n"}
                Kapitał zakładowy 1.502.524.14 PLN{"\n"}
            </p></div>
    )
}