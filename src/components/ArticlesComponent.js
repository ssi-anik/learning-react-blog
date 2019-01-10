import React from "react";
import { ArticleComponent } from "./ArticleComponent";
import { Button, Icon, Grid } from "semantic-ui-react";

export const ArticlesComponent = props => {
    let articles = props.articles;
    let pagination = props.pagination;
    let hasNextPage = pagination.next_page ? true : false;
    let hasPreviousPage = pagination.previous_page ? true : false;
    return (
        <div>
            {
                <Button primary>
                    <Icon name='left arrow'/> Previous
                </Button>
            }
            {
                <Button primary>
                    Next <Icon name='right arrow'/>
                </Button>
            }
            {
                articles.map(article => {
                    return <ArticleComponent article = {article} />
                })
            }
        </div>
    )
}