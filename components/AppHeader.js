import React from 'react';
import { Header } from 'react-native-elements';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header
        placement="left"
        containerStyle={{
          backgroundColor: '#f7b05b',
          justifyContent: 'space-around',
        }}
        
        centerComponent={{ text: 'EMPLOYEE APP', style: { color: '#fff' ,alignSelf:"center"} }}
        
      />
    );
  }
}
