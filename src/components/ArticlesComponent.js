import React from "react";
import { ArticleComponent } from "./ArticleComponent";
import { PaginationComponent } from "./PaginationComponent";
import { Container } from "semantic-ui-react";
import { NotFoundComponent } from "./NotFoundComponent";

export const ArticlesComponent = props => {
    let articles = props.articles;
    let pagination = props.pagination;
    let message = props.notFoundMessage || 'Could not find anything!';
    let icon = props.icon;

    if ( articles.length === 0 ) {
        return <NotFoundComponent icon = {icon} message = {message} />
    }

    return (
        <div>
            <PaginationComponent
                nextButtonClick = {props.nextButtonClick}
                previousButtonClick = {props.previousButtonClick}
                pagination = {pagination} />
            <Container>
                {
                    articles.map(article => {
                        return <ArticleComponent key = {article.id} article = {article} />
                    })
                }
            </Container>
            <PaginationComponent
                nextButtonClick = {props.nextButtonClick}
                previousButtonClick = {props.previousButtonClick}
                pagination = {pagination} />
        </div>
    )
}