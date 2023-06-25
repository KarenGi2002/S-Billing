import { ArticleApi } from '../../../services'

const deleteArticle = (articleId, setArticles, messageApi) => {
  new ArticleApi()
    .apiArticleIdDelete(articleId)
    .then(() => {
      setArticles((prev) => prev.filter((obj) => obj.articleId !== articleId))
      messageApi.open({
        type: 'success',
        content: 'Article has been delete successfully!',

      });
    })
    .catch(() => {
      messageApi.open({
        type: 'success',
        content: 'Article hasn\'t been delete error!',
      });
    })
}

export { deleteArticle }
