import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({

});

const AppBarInstance = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
            title="Local News"
            showMenuIconButton={false}
        />
    </MuiThemeProvider>
);

export default AppBarInstance;