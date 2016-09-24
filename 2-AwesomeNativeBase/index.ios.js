import React, {Component} from 'react';
import { AppRegistry } from 'react-natvie';
import { Container, Header, Title, Button, Icon, Content } from 'native-base';

var AwesomeNativeBase = React.createClass({
    render: function(){
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>Header</Title>
                    
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
                <Container> 
                <Content>
                    // Your main content goes here
                </Content>
                </Container>
            </Container>
        );
    }
});

AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
