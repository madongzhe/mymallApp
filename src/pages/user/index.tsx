import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from './head/head'
import './index.scss'

export default class UserIndex extends Component {
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    return (
      <View className='user'>
        <Head></Head>
        <View>
          <Text>我的订单</Text>
        </View>
        <View>

        </View>
      </View>
    )
  }
}