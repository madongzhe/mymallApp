import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class DiscountsIndex extends Component {
  config: Config = {
    navigationBarTitleText: '购物车'
  }

  render () {
    return (
      <View className='index'>
        <Text>优惠活动</Text>
      </View>
    )
  }
}