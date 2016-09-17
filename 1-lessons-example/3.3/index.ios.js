import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Text,
  AppRegistry,
  View,
  ScrollView,
} from 'react-native';

var List = React.createClass({
  render: function(){
    return (
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 豪華郵輪濟州島3日遊</Text>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 豪華郵輪台灣3日遊</Text>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 豪華郵輪地中海8日遊</Text>
      </ScrollView>
      );
  },
  goTo: function(){
    this.props.navigator.push({
      component: Detail,
      title: '郵輪詳情',
      rightButtonTitle: '購物車',
      onRightButtonPress: function(){
        alert('進入我的購物車');
      }
    });
  }
});

var Detail = React.createClass({
  render: function(){
    return (
      <ScrollView>
        <Text>Detail Page</Text>
        <Text>儘管訊息很少,但這個就是詳細頁</Text>
      </ScrollView>
    );
  }
});

var NV = React.createClass({
  render: function(){
    return(
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component: List,
          title: '郵輪',
          passProps: {},
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});

AppRegistry.registerComponent('App', () => NV);