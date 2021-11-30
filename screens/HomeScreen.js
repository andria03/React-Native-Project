import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Constants from 'expo-constants';
import data from '../Database';
import axios from 'axios';
import firebase from 'firebase';
import db from '../config';
import style from '../style'
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      allEmployee: [],
      search_employee: '',
    };
  }


//To get data through Web Service    // Unfortunately kept on showing network error!
  getDatafromURL = () => {
    axios
      .get('http://www.mocky.io/v2/5d565297300000680030a986')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  };


//Storing data to Google Firebase database from offline database

  putDatatoDatabase = (value) => {
    db.collection('Employee').add({
      id: value['id'],
      name: value['name'],
      username: value['username'],
      email: value['email'],
      profile_image: value['profile_image'],
      address: {
        street: value['address']['street'],
        suite: value['address']['suite'],
        city: value['address']['city'],
        zipcode: value['address']['zipcode'],
        geo: {
          lat: value['address']['geo']['lat'],
          lng: value['address']['geo']['lng'],
        },
      },
      phone: value['phone'],
      website: value['website'],
      company: {
        name: value['company']['name'],
        catchPhrase: value['company']['catchPhrase'],
        bs: value['company']['bs'],
      },
    });
  };


//To retreive data from Firebase database

  getDatafromDatabase = () => {
    var employeeRef = db
      .collection('Employee')
      .get()
      .then((snapshot) => {
        console.log('hi');
        var allEmployee = [];
        snapshot.docs.map((doc) => {
          var employees = doc.data();
          employees['doc_id'] = doc.id;
          allEmployee.push(employees);
        });
        this.setState({
          allEmployee: allEmployee,
          
        });
       
      });
  };


//To search for Employee based on name
  searchEmployeefromDatabase = (text) => {
    var employeeRef = db
      .collection('Employee')
      .where('name', '==', text)
      .get()
      .then((snapshot) => {
        var allEmployee = [];
        snapshot.docs.map((doc) => {
          var employees = doc.data();
          employees['doc_id'] = doc.id;
          allEmployee.push(employees);
        });
        this.setState({
          allEmployee: allEmployee,
          search_employee:allEmployee['name']
        });
        console.log(allEmployee);
      });
  };


// Props of Flatlist
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight onPress={()=>{this.props.navigation.navigate('DetailsScreen',{'id':item.id})}}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <Avatar source={{ uri: item.profile_image }} />
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{/*item.company.name*/}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </TouchableHighlight>
    );
  };



  componentDidMount() {
       this.getDatafromDatabase();
  }
 

  render() {
    return (
      <View style={style.maincontainer} >
        <AppHeader />
        <TextInput
          style={style.formTextInput}
          placeholder={'Search Employee'}
          onChangeText={(text) => this.searchEmployeefromDatabase(text)}
          value={this.state.search_employee}
        />
        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allEmployee}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
