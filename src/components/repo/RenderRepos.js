import React from 'react';
import ReposInformation from './ReposInformation';

const RenderUserRepo = ({repos}) => {
    return (
        <div>
            {repos && Array.isArray(repos) && repos.length > 0 ? <ReposInformation repos={repos}/> : ''}
        </div>
    );
}

export default RenderUserRepo;
  