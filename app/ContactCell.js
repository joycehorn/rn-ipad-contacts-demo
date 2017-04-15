'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'

export default class ContactCell extends React.Component {
  constructor (props) {
    super (props);
    this.state =  {
      username: this.props.contact.fullName,
      url: this.props.contact.avatar
    };
  }

  selectContact() {
    this.props.setContact(this.props.contact);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.selectContact.bind(this)}>
        <View style={styles.row}>
          <Image style={styles.image} source={{uri: this.state.url}} />
          <Text style={styles.text}>{ this.state.username }</Text>
        </View>
      </TouchableHighlight>
    );
}
};

var styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

