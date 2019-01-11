import React from "react";
import { ArticleComponent } from "./ArticleComponent";
import { PaginationComponent } from "./PaginationComponent";
import { Container } from "semantic-ui-react";
import { NotFoundComponent } from "./NotFoundComponent";

export const ArticlesComponent = props => {
    let articles = props.articles;
    let pagination = props.pagination;
    let fetchType = props.fetchType;
    let data = props.data;

    if ( articles.length === 0 ) {
        let header;
        switch ( fetchType.toLowerCase() ) {
            case 'tag':
                header = 'Cannot find anything with Tag \'' + data.toString() + '\'';
                break;
            default:
                header = 'Cannot find any Article right this moment!';
                break;
        }
        return <NotFoundComponent missing = {!!data} header = {header} />
    }

    return (
        <div>
            <PaginationComponent pagination = {pagination} />
            <Container>
                {
                    articles.map(article => {
                        return <ArticleComponent key = {article.id} article = {article} />
                    })
                }
            </Container>
            <PaginationComponent pagination = {pagination} />
        </div>
    )
}