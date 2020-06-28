import React, { useState } from 'react';
import GithubIntegration from '../../integration/GithubIntegration';
import { FolderShared, StarRate } from '@material-ui/icons';
import { 
    Card,
    Collapse,
    CardHeader,
    CardContent,
    Avatar,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core';
import RenderUserRepo from '../repo/RenderRepos';

const UserCardHeader = props => (
    <CardHeader
        avatar={
            <Avatar aria-label="recipe" alt={props.login} src={props.avatar_url} />
        }
        action={
            <IconButton aria-label="settings">
            </IconButton>
        }
        title={props.login}
        subheader={props.bio}
    />
);

const ListUserOptions = ({onClickRepo, onClickStar, ...props}) => (
    <List>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <IconButton onClick={onClickRepo}>
                        <FolderShared />
                    </IconButton>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Repositories" secondary="Click on image to see user repositories" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <IconButton onClick={onClickStar}>
                        <StarRate />
                    </IconButton>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Stars" secondary="Click on image to see starred repositories" />
        </ListItem>
        <Divider variant="inset" component="li" />
    </List>
);

const UserRepoCollapse = ({canExpand, repos, ...props}) => (
    <Collapse in={canExpand} timeout="auto" unmountOnExit>
        <CardContent>
            <RenderUserRepo repos={repos}/>
        </CardContent>
    </Collapse>
);

const UserCard = props => {
    const [expandRepo, setExpandRepo] = useState(false);
    const [repos, setRepos] = useState([]);
    
    const handleExpandCollapseRepo = async () => {
        setExpandRepo(false);
        setRepos([]);
        const res = await GithubIntegration.findRepos(props.url);
        setRepos(res.data);
        setExpandRepo(true);
    }
    
    const handleExpandCollapseStarred = async () => {
        setExpandRepo(false);
        setRepos([]);
        const res = await GithubIntegration.findStarredRepos(props.url);
        setRepos(res.data);
        setExpandRepo(true);
    }

    return (
        <Card>
            <UserCardHeader {...props} />
            <CardContent>
                <ListUserOptions {...props} 
                        onClickRepo={handleExpandCollapseRepo}
                        onClickStar={handleExpandCollapseStarred}/>
            </CardContent>
            {expandRepo ? <UserRepoCollapse {...props} canExpand={expandRepo} repos={repos} /> : '' }
        </Card>
    );
}

  
const UserInformation = ({user}) => {
    return (
        <div>
            <UserCard {...user} />
        </div>
    )
}

export default UserInformation;