import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import AppHeader from '../components/AppHeader';
export default class DetailsScreen extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={{height:'100%'}}>
        <AppHeader />
        <View style={styles.innercontainer}>
          <Text style={styles.paragraph}>{this.props.navigation.getParam('id')}</Text>
        </View>
      </View>
    );
  }
}