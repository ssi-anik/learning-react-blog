import React from "react";
import { Grid, Segment, Label, Header, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TagsComponent } from "./TagsComonent";

export const ArticleComponent = props => {
    let article = props.article;
    let viewArticleUrl = '/article/' + article.slug;
    let userArticleUrl = '/user/' + article.user.id + '/article';
    return (
        <Grid>
            <Grid.Column width = {16}>
                <Segment stacked>
                    <Label as = {Link}
                           to = {userArticleUrl}
                           color = 'red' ribbon>
                        { article.user.name }
                    </Label>
                    <Label as = {'label'} color={'teal'} style = {{'float': 'right'}}  >Published on: {article.published_at}</Label>

                    <Divider />
                    <p>
                        { article.content.substring(0, 800) }
                    </p>
                    { <Header color = {'green'} as = 'h4'><Link to = {viewArticleUrl}>...Continue reading</Link></Header>}
                    <Divider/>
                    <TagsComponent tags = {article.tags} />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}