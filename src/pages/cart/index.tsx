import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class CartIndex extends Component {
  config: Config = {
    navigationBarTitleText: '购物车'
  }

  render () {
    return (
      <View className='index'>
        <Text>购物车</Text>
      </View>
    )
  }
}