import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class CateIndex extends Component {
  config: Config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View className='index'>
        <Text>分类</Text>
      </View>
    )
  }
}