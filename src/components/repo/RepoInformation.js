import React from 'react';
import { Card, CardActionArea, CardContent, Button, Typography, CardActions, Box } from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';

const RepoInformation = ({repoInformation}) => {
    return (
        <Card style={{ width: '100%' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {repoInformation.full_name}
                    </Typography>
                    <Box component="span" m={1}>{ repoInformation.private ? (<div><Lock /> Private</div>) : (<div><LockOpen /> Public</div>)}</Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {repoInformation.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={repoInformation.html_url} target="_blank">
                    Go to repository
                </Button>
            </CardActions>
        </Card>
    );
}

export default RepoInformation;