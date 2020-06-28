import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const BackButtonHome = () => (
    <Button size="small" color="primary"><Link to="/">Back to Home</Link></Button>
);

export default BackButtonHome;