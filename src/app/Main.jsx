import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardInstance from './Card.jsx';
import AppBarInstance from './AppBar.jsx';

const muiTheme = getMuiTheme({

});

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render () {
        return (
            <div>
                <AppBarInstance />
                <CardInstance />
            </div>
        );
    }
}

export  default Main;