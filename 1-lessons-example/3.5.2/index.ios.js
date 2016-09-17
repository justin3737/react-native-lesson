import React from 'react';
import {
    StyleSheet,
    Text,
    AppRegistry,
    View,
    TouchableOpacity
} from 'react-native';

var App = React.createClass({
    show: function(text){
        alert(text);
    },
    render: function() {
        return(
            <View style={[styles.flex]}>
                <View>
                    <TouchableOpacity
                    onPress={this.show.bind(this, 'React 入門')}
                    >
                        <Text style={styles.item}>React 入門</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                    onPress={this.show.bind(this, '人間淨土-稻城亞丁')}
                    >
                        <Text style={styles.item}>人間淨土-稻城亞丁</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={{fontSize:25, color:'#fff'}}>按鈕</Text>
                        </View>
                    </TouchableOpacity>
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
    },
    btn: {
        marginLeft:30,
        marginTop:30,
        width:100,
        height:100,
        backgroundColor: '#18B4EF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
});

AppRegistry.registerComponent('App', () => App);    