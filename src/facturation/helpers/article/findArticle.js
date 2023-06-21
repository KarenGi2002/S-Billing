const findArticle = (articleId, articles) => {
    return articles.find((obj) => obj.articleId === articleId) || {}
  }
  
  export { findArticle }
  