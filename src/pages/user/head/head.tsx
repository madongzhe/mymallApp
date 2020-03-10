import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './head.scss'


interface IAppProps{
  userdata:any,
}
export default class Head extends Component<IAppProps> {
  static defaultProps = {
    userdata: {}
  }
  render () {
    return (
      <View className='head-user'>
        <View className='head-user_avatar'>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        </View>
        <Text>张三</Text>
      </View>
    )
  }
}