import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  const articleItems = articles.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      date={article.date}
      preview={article.preview}
    />
  ));
  return (<main>{articleItems}</main>);
}

export default ArticleList;
