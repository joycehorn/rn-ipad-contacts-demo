'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'

export default class ContactDetail extends React.Component {
  render () {
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.hero}>
          <Image style={styles.heroImage} source={{uri: this.props.contact.avatar}} />
          <View style={styles.heroTextBox}>
            <Text>{ this.props.contact.fullName }</Text>
            <Text style={styles.companyName}>{ this.props.contact.company }</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Phone</Text>
          <Text>{ this.props.contact.phone }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Work</Text>
          <Text>{ this.props.contact.cellphone }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Private</Text>
          <Text>{ this.props.contact.email }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Work</Text>
          <Text>{ this.props.contact.emailWork }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Home</Text>
          <Text>{ this.props.contact.address }</Text>
          <Text>{ this.props.contact.zipcode } { this.props.contact.city }</Text>
          <Text>{ this.props.contact.country }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Birthday</Text>
          <Text>{ this.props.contact.displayBirthday }</Text>
        </View>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  scrollview: {
    height: 740,
    backgroundColor: "#FFFFFF"
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10
  },
  heroTextBox: {
    flexDirection: "column"
  },
  companyName: {
    color: "#888888"
  },
  item: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
  },
  label: {
    color: "#007AFF",
    marginBottom: 5
  },
});
