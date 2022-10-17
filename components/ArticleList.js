import artyclesStyles from '../styles/Article.module.css'
import ArticleItem from "./ArticleItem";

const ArticleList =({articles})=> {
    return (
        <div className={artyclesStyles.grid}>
            {articles.map(article=>{
                return <ArticleItem article={article} />
            })}
        </div>
    )
}
export default ArticleList