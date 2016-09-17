import React from 'react';
import {
    StyleSheet,
    Text,
    AppRegistry,
    View,
    TouchableHighlight
} from 'react-native';

var App = React.createClass({
    show: function(text){
        alert(text);
    },
    render: function() {
        return(
            <View style={[styles.flex]}>
                <View>
                    <TouchableHighlight
                    onPress={this.show.bind(this, 'React 入門')}
                    underlayColor="#E1F6FF"
                    >
                        <Text style={styles.item}>React 入門</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <TouchableHighlight
                    onPress={this.show.bind(this, '人間淨土-稻城亞丁')}
                    underlayColor="#E1F6FF"
                    >
                        <Text style={styles.item}>人間淨土-稻城亞丁</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    flex:{
        flex: 1,
        marginTop:25
    },
    item:{
        fontSize:18,
        marginLeft:5,
        color:'#434343'
    }
});


AppRegistry.registerComponent('App', () => App);    