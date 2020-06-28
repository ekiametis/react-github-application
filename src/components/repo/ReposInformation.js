import React from 'react';
import RepoInformation from './RepoInformation.js';
import { 
    List,
    ListItem,
} from '@material-ui/core';

const ReposInformation = ({repos}) => {

    const formattedList = repos.map((repo, index) => {
        return (
            <ListItem key={index}>
                <RepoInformation repoInformation={repo} />
            </ListItem>
    )});

    return (
        <List>
            {formattedList}
        </List>
    );
}

export default ReposInformation;