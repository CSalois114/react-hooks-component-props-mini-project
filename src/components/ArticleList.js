import React from 'react'
import Article from "./Article";

export default function ArticleList({articles}) {
  return (
    <main>
      {articles.map(article => (
        <Article article={article}/>
      ))}
    </main>
  )
}
