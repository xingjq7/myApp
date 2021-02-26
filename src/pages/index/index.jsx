import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './Child'

export default class Index extends Component {

  state = {
    name:'Helloworld'
  }
  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/*<Text>{this.state.name}1</Text>*/}
        <Child name={this.state.name} />
      </View>
    )
  }
}
