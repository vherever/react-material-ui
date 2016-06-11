import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {Grid, Row, Col} from 'react-bootstrap';



const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 50
    }
};

const muiTheme = getMuiTheme({

});

class CardInstance extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Grid>
                    <Row>
                        <Col md={8} mdOffset={2} xs={12}>
                            <div style={styles.container}>
                                <div className="row">
                                    <Card>
                                        <CardActions>
                                            <FlatButton label="Action1" />
                                            <FlatButton label="Action2" />
                                        </CardActions>
                                        <CardHeader
                                            title="URL Avatar"
                                            subtitle="Subtitle"
                                            avatar="http://lorempixel.com/100/100/nature/"
                                        />
                                        <CardMedia

                                        >
                                            <img src="http://lorempixel.com/600/337/nature/" />
                                        </CardMedia>
                                        <CardTitle title="Card title" subtitle="Card subtitle" />
                                        <CardText>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                        </CardText>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default CardInstance;