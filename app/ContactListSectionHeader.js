'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class ContactListSectionHeader extends React.Component {
  render () {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{this.props.text}</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  sectionHeader: {
    paddingLeft: 10,
    padding: 5,
    backgroundColor: '#EEEEEE',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE'
  },

  headerText: {
    fontWeight: "bold"
  }
});
