import React from "react";
import { Grid, Segment, Label, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const ArticleComponent = props => {
    let article = props.article;
    let viewArticleUrl = '/article/' + article.slug;
    let userArticleUrl = '/user/' + article.user.id + '/article';

    return (
        <Grid>
            <Grid.Column width = {16}>
                <Segment raised>
                    <Label color = 'red' ribbon>
                        <Link to = {userArticleUrl}>{ article.user.name + ' (' + article.created_at + ')' }</Link>
                    </Label>
                    <span>
                        {
                            article.tags.map(tag => {
                                let tagUrl = '/tag/' + tag + '/article';
                                return (<Label as = 'a' tag color = {'blue'}>
                                    <Link to = {tagUrl}>{tag}</Link>
                                </Label>);
                            })
                        }
                    </span>
                    <p>
                        { article.content.substring(0, 800) }
                        { <Link to = {viewArticleUrl}><Header color = {'green'} as = 'h4'>...See more</Header></Link>}
                    </p>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}