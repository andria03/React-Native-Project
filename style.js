import { StyleSheet, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#af9b46',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    flex: 1,
  },
  innercontainer: {
    backgroundColor: '#F7CE5B',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    flex: 1,
    height:'100%',
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F1300',
  },
  loginbutton: {
    backgroundColor: '#DFD6A7',
    width: 100,
    height: 30,
    padding: 5,
    marginTop: 10,
    paddingLeft: 30,
    alignSelf: 'center',
    borderRadius: 20,
    color: '#',
  },
  safemargin: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight - 200 : 0,
  },
  mainheading: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1F1300',
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#f7ce5bff',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
});

export default styles;
