import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class ItemIndex extends Component {
  config: Config = {
    navigationBarTitleText: '详情'
  }
  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Text>详情</Text>
      </View>
    )
  }
}