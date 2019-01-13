import React from "react";
import { Grid, Message } from "semantic-ui-react";

export const NotFoundComponent = (props) => {
    let message = props.message;
    let header, content, icon;

    if ( message ) {
        header = message;
        content = props.content || '';
        icon = props.icon || 'thumbs down outline';
    } else {
        icon = props.icon || 'meh outline';
        header = props.header || 'Oh crap, Again!';
        content = props.content || 'Sorry to say but nothing in here.';
    }
    return (
        <Grid>
            <Grid.Row>
                <Message size = {'massive'}
                         icon = {icon}
                         header = {header}
                         content = {content}
                />
            </Grid.Row>
        </Grid>
    )
}