'use strict';

import React, { Component } from 'react'
import ContactList  from '../ContactList'
import ContactDetail  from '../ContactDetail'
import {
  StyleSheet,
  View
} from 'react-native'

export default class MasterDetail extends React.Component {

  constructor (props) {
    super (props)

    this.state =  {
      list: this.props.list,
      selected: this.props.list[0]
    };
  }

  setSelected (contact) {
    this.setState({ selected: contact });
  }

  render () {
    return (
      <View style={styles.screen}>
        <View style={styles.master}>
          <ContactList contacts={this.state.list} setContact={this.setSelected.bind(this)}/>
        </View>
        <View style={styles.detail}>
          <ContactDetail contact={this.state.selected}/>
        </View>
      </View>
    );
  }
};

var MASTER_WIDTH = 350;
var styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
  master: {
    width: MASTER_WIDTH,
    paddingTop: 30
  },
  detail: {
    flex: 1,
    padding: 20
  }
});
