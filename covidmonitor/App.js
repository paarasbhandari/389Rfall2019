/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loaded:false,
       mainList:'',
    }
  }


  getStats = () => {
    var req = new XMLHttpRequest();
    req.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
    req.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
    req.setRequestHeader("x-rapidapi-key", "05750f318dmshb9956c06299a96ap1953b5jsne26e372fe8b6");
    
    req.onload = () => {
          // Typical action to be performed when the document is ready:
          this.setState({mainList:req.responseText})

    };
    
    req.send();
  }

  componentDidMount = () => {
    this.getStats();
  }

  render = () => {
   
    return (<View style={{backgroundColor:"#191919", padding:"1px"}}>
          <Text style={{color:"white"}}>Hello {this.state.mainList} </Text>
        </View>);
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


