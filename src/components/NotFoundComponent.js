import React from "react";
import { Grid, Message } from "semantic-ui-react";

export const NotFoundComponent = (props) => {
    let icon = props.icon ? props.icon : 'meh outline';
    let header = props.header ? props.header : 'Oh crap, Again!';
    let content = props.content ? props.content : 'Sorry to say but nothing in here.';
    let missing = props.missing;

    if ( missing ) {
        header = props.header ? props.header : 'Cannot find anything with \'' + missing + '\'';
        content = props.content ? props.content : '';
        icon = props.icon ? props.icon : 'thumbs down outline';
    }
    return (
        <Grid>
            <Grid.Row>
                <Message size={'massive'}
                    icon = {icon}
                    header = {header}
                    content = {content}
                />
            </Grid.Row>
        </Grid>
    )
}