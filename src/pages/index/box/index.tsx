import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

interface IAppProps {
    list?: any;
}
export default class Policy extends Component<IAppProps> {
  static defaultProps = {
    list: []
  }
  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true
  }
  render () {
    const { list } = this.props
    return (
      <View className='home-policy'>
        {list.map((item, index) => (
          <View key={index} className='home-policy_item'>
            <Image
              className='home-policy_item-img'
              src={item.icon}
            />
            <Text className='home-policy_item-txt'>{item.desc}</Text>
          </View>
        ))}
      </View>
    )
  }
}