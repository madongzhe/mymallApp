import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './user-login.scss'

export default class UserIndex extends Component {
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    return (
        <View>
          <Text>手机号登录</Text>
        </View>
      )
    }
  }