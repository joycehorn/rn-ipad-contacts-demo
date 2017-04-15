'use strict';

import React, { Component } from 'react';
import Device  from 'react-native-device';
import ContactFactory from './app/factories/contact_factory';
import MasterDetail from './app/iPad/MasterDetail';
import IphoneLayout from './app/iPhone/IphoneLayout';
import './ReactotronConfig';

import {
  AppRegistry
} from 'react-native';

export default class contacts extends Component {

  constructor (props) {
    super (props);

    var factory = new ContactFactory();

    this.state = { contacts: factory.createList(100) };
  }

  render() {
    if (Device.isIpad()) {
      return <MasterDetail list={this.state.contacts}/>;
    } else {
      return <IphoneLayout list={this.state.contacts}/>;
    }
  }
};

AppRegistry.registerComponent('contacts', () => contacts);
