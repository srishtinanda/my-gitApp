import React from 'react';
import { TextInput,Text, View } from 'react-native';
import axios from 'axios';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input:'', data: []};
}
  render() {
    console.log(this.state.data);
    return (
      <View>
        <TextInput
        style={{height: 40, width: 100 , borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.getResults(text)}
        value={this.state.input}
      />
      <Text>{this.state.result} </Text>
      </View>
    );
  }
  
  getResults = (text) => {
    this.setState({input: text});
    axios.get(`https://api.github.com/search/repositories?q=${text}`)
  .then((response) => {
    console.log(response.data.items);
    this.setState({data: response.data.items});
  })
  .catch(function (error) {
    console.log(error);
  });
   }
}