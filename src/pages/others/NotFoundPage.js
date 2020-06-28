import React from 'react';
import { Box } from '@material-ui/core';
import PageNotFound from '../../assets/images/PageNotFound.png';
import BackHomeButton from '../../components/utils/BackHomeButton'

const NotFoundPage = () => (
    <Box style={{'text-align': 'center'}}>
        <BackHomeButton />
        <Box>
            <img width="80%" src={PageNotFound} alt="Page Not Found" />
        </Box>
    </Box>
);

export default NotFoundPage;