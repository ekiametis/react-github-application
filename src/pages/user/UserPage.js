import React, { useState, useEffect } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import GithubIntegration from '../../integration/GithubIntegration';
import UserInformation from '../../components/user/UserInformation';
import BackHomeButton from '../../components/utils/BackHomeButton';

const UserPage = (props) => {
    const [user, setUser] = useState({});
    const [hasUser, setHasUser] = useState(false);

    let history = props.history;
    const goBack = history.goBack.bind(this);
    const username = props.match.params.username;

    useEffect(() => {
        const retrieveUser = async() => {
            try {
                const res = await GithubIntegration.findUser(username);
                setUser(res.data);
                setHasUser(true);
            } catch(err) {
                history.push('/not-found');
            }
        }
        retrieveUser();
    });

    return (
        <div>
            <header>
                <Container fixed>
                    <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                    >
                        {hasUser ? 
                            <div>
                                <Button size="small" color="primary" onClick={goBack}>Go Back</Button>
                                <BackHomeButton />
                                <UserInformation user={user} />
                            </div> : ''}
                    </Grid>   
                </Container>
            </header>
        </div>
    );
}

export default UserPage;