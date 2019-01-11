import React from "react";
import { Button, Icon, Grid, Container } from "semantic-ui-react";

export const PaginationComponent = (props) => {
    let pagination = props.pagination;

    let hasNextPage = pagination.next_page;
    let hasPreviousPage = pagination.previous_page;

    return (
        <Container>
            <Grid columns = {2}>
                <Grid.Column>
                    {
                        <Button floated = 'left' onClick = {props.previousButtonClick} primary disabled = {!hasPreviousPage}>
                            <Icon name = 'left arrow' /> Previous
                        </Button>
                    }
                </Grid.Column>
                <Grid.Column>
                    {
                        <Button floated = 'right' onClick = {props.nextButtonClick} primary disabled = {!hasNextPage}>
                            Next <Icon name = 'right arrow' />
                        </Button>
                    }
                </Grid.Column>
            </Grid>
        </Container>
    );
}