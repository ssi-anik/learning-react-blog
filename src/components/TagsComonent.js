import React from "react";
import { Label, Icon, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const TagsComponent = (props) => {
    let tags = props.tags;

    if ( !(tags instanceof Array) || tags.length < 1 ) {
        return null;
    }

    return (
        <Grid columns = {2}>
            <Grid.Column width = {2}>
                <Label as = {'label'} color = {'black'}>
                    <Icon name = 'tag' /> Tags({ tags.length }):
                </Label>
            </Grid.Column>
            <Grid.Column width = {14}>
                <Label.Group tag>
                    {
                        tags.map(tag => {
                            let tagUrl = '/tag/' + tag + '/article';
                            return (
                                <Label as = {Link} to = {tagUrl} key = {tag} tag color = {'green'}>
                                    {tag}
                                </Label>
                            );
                        })
                    }
                </Label.Group>
            </Grid.Column>
        </Grid>

    );
}