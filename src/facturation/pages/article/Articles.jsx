import { useEffect, useState } from 'react'
import { AddNewButton, EditArticle } from '../../components'
import { InventoryApi } from '../../../services'
import { Button, Space, Table, message } from 'antd'
import { findArticle, deleteArticle } from '../../helpers/article'
import { AddArticle } from '../../components/articles/AddArticle'
import { useParams } from 'react-router-dom'

export const Articles = () => {
  const { inventory_id } = useParams()
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState({})
  const [error, setError] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  const [messageApi, contextHolder] = message.useMessage()
  const toggleDisplayEditForm = () => setEditArticle({})
  const addGuiArticle = (article) => {
    setArticles((prev) => [{ ...article, key: article?.articleId }, ...prev])
  }

  const updateGuiArticle = (articleId, updatedArticle) => {
    setArticles((prev) =>
      prev.map((article) => {
        if (article.articleId !== articleId) return article
        return {
          key: article.key,
          articleId,
          ...updatedArticle
        }
      })
    )
  }
  useEffect(() => {
    new InventoryApi()
      .apiInventoryIdArticlesGet(inventory_id)
      .then(({ body }) => {
        const articlesWithKey = body['$values'].map((article) => ({
          ...article,
          amount: article.name,
          key: article.articleId
        }))
        setArticles(articlesWithKey)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Stock Quantity',
      dataIndex: 'stockQuantity',
      key: 'stockQuantity'
    },
    {
      title: 'Cost Price',
      dataIndex: 'costPrice',
      key: 'costPrice'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">edit</span>}
            size="large"
            onClick={() => setEditArticle(findArticle(record.articleId, articles, messageApi))}
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
            onClick={() => {
              deleteArticle(record.articleId, setArticles, messageApi)
            }}
          />
        </Space>
      )
    }
  ]

  return (
    <section className="container">
      {contextHolder}
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={articles} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
      {displayForm && (
        <AddArticle
          toggleDisplayForm={toggleDisplayForm}
          addGuiArticle={addGuiArticle}
          messageApi={messageApi}
        />
      )}
      {Object.keys(editArticle).length !== 0 && (
        <EditArticle
          article={editArticle}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuiArticle={updateGuiArticle}
          messageApi={messageApi}
        />
      )}
    </section>
  )
}
