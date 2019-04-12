import React from 'react';
import { Text, TextInput, View, Keyboard } from 'react-native';

export class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <TextInput
        style={{height: 40, width: 100 , borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
