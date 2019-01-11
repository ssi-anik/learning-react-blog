import React from "react";
import { Grid, Segment, Label, Header, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const ArticleComponent = props => {
    let article = props.article;
    let viewArticleUrl = '/article/' + article.slug;
    let userArticleUrl = '/user/' + article.user.id + '/article';
    let tagViews = renderTags(article.tags)
    return (
        <Grid>
            <Grid.Column width = {16}>
                <Segment raised>
                    <Label as = {Link}
                           to = {userArticleUrl}
                           color = 'red' ribbon>
                        { article.user.name + ' (' + article.created_at + ')' }
                    </Label>
                    { tagViews }
                    <Divider />
                    <p>
                        { article.content.substring(0, 800) }
                    </p>
                    { <Header color = {'green'} as = 'h4'><Link to = {viewArticleUrl}>...See more</Link></Header>}
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

function renderTags (tags) {
    if ( !(tags instanceof Array) || tags.length < 1 ) {
        return null;
    }
    return (
        <Label.Group tag>
            {
                tags.map(tag => {
                    let tagUrl = '/tag/' + tag + '/article';
                    return (<Label as = {Link} to = {tagUrl} key = {tag} tag color = {'blue'}>
                        {tag}
                    </Label>);
                })
            }
        </Label.Group>

    );
}