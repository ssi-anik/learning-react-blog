import React from "react";
import { ArticleComponent } from "./ArticleComponent";
import { PaginationComponent } from "./PaginationComponent";
import { Container } from "semantic-ui-react";

export const ArticlesComponent = props => {
    let articles = props.articles;
    let pagination = props.pagination;
    console.log(pagination);
    return (
        <div>
            <PaginationComponent pagination = {pagination} />
            <Container>
                {
                    articles.map(article => {
                        return <ArticleComponent key={article.id} article = {article} />
                    })
                }
            </Container>
            <PaginationComponent pagination = {pagination} />
        </div>
    )
}