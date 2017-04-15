'use strict';

import React, { Component } from 'react'
import {
  NavigatorIOS,
  StyleSheet
} from 'react-native'
import ContactList from '../ContactList'
import ContactDetail from '../ContactDetail'
import Reactotron from 'reactotron-react-native'

export default class IphoneLayout extends React.Component {

  constructor (props) {
    super (props);
  }

  selectContact (contact, navigator) {
    navigator.push({
      title: contact.fullName,
      component: ContactDetail,
      passProps: {
        contact: contact
      }
    });
  }

  render () {

    //Reactotron.log(this.selectContact);

    return (

      <NavigatorIOS
      style={styles.container}
      initialRoute={{
      title: 'Contacts',
      component: ContactList,
      passProps: {
        contacts: this.props.list,
        setContact: this.selectContact
      }
    }} />
           );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
