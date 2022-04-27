import React from 'react'
import * as ArticleStyles from "./article.module.css"

export default function Article({ children }) {
    return (
      <article className={ArticleStyles.article}>{children}</article>
    )
  }