'use strict';

import React, { Component } from 'react'
import ContactCell from './ContactCell'
import ContactListSectionHeader from './ContactListSectionHeader'
import {
  StyleSheet,
  ListView
} from 'react-native'
import Reactotron from 'reactotron-react-native'

export default class ContactList extends React.Component {

  constructor (props) {
    super(props)

   // Reactotron.log(props);
   // Reactotron.log(this);

    var getSectionData = (data, sectionID) => {
      return data[sectionID];
    };
    var getRowData = (data, sectionID, rowID) => {
      return data[rowID];
    };

    var dataSource = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    var data = {};
    var sectionIDs = [];
    var rowIDs = [];
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    for (var i = 0; i < alphabet.length; i++) {
      var filteredContacts = this.props.contacts.filter((contact) => {
        return contact.lastName.toUpperCase().indexOf(alphabet[i]) === 0;
      });

      if (filteredContacts.length > 0) {
        var currentChar = alphabet[i];
        var nextRowIDs = rowIDs.length;

        sectionIDs.push(currentChar);
        data[currentChar] = currentChar;
        rowIDs[nextRowIDs] = [];

        for (var j = 0; j < filteredContacts.length; j++) {
          var rowName = `S${i}R${j}`;
          rowIDs[nextRowIDs].push(rowName);
          data[rowName] = filteredContacts[j];
        }
      }
    }

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(data, sectionIDs, rowIDs),
    };
  }

  setContact (contact) {
    Reactotron.log(this.props)
    this.props.setContact(contact, this.props.navigator);
  }

  renderRow (rowdata) {
    Reactotron.log(this);
    return <ContactCell contact={rowdata} setContact={this.setContact.bind(this)}/>;
  }

  renderSectionHeader (sectionData) {
    return <ContactListSectionHeader text={sectionData}/> ;
  }

  render () {
    //Reactotron.log(this);
    return <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} renderSectionHeader={this.renderSectionHeader}/>;
  }
};

