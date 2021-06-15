import React from 'react';
import { Typography, AppBar } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
    return (
        <div>
            <AppBar position="static" color = "inherit">
                <Typography variant="h2" align="center">
                    Connectify
                </Typography>
            </AppBar>
            {/ video player component/}
            <VideoPlayer />
            {/ options component, notification component /}
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}

export default App;