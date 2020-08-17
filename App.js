import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      works: [],
      isVisible: false
    }
  }
  handleClick = () => {
    const arr = this.state.works.slice()
    const val = this.state.text
    arr.push({ id: Math.random().toString(), value: val })
    this.setState({
      works: arr,
      isVisible: false,
      text : ''
    })

  }
  changeHandler = (newText) => {
    this.setState({
      text: newText
    })
    // alert(this.state.text)
  }

  deleteHandler = (deleteId) => {
    const newArr = this.state.works.filter(work => work.id !== deleteId)
    this.setState({
      works: newArr
    })
  }
  render() {
    return (
      <View style={styles.container} >
        <Button
          onPress={() => { this.setState({ isVisible: true }) }}
          title="ADD" 
          color = '#005086'
          />
        <GoalInput
          changeHandler={this.changeHandler}
          handleClick={this.handleClick}
          visible={this.state.isVisible}
          removeModel={()=>{this.setState({isVisible:false})}}
        />
        <GoalItem
          works={this.state.works}
          delete={this.deleteHandler}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 40
  }
});


export default App