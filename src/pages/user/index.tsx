import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class UserIndex extends Component {
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    return (
      <View className='index'>
        <Text>个人中心</Text>
      </View>
    )
  }
}