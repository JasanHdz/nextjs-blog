import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArticleCard from './article-card'

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

function ArticleList({ articles }) {
  return (
    <GridStyled>
      {articles.map((article, idx) => <ArticleCard key={idx} article={article} />)}
    </GridStyled>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList