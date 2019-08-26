import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

interface IAppProps {
    Item: any;
}
export default class Item extends Component<IAppProps> {
  render () {
    const { Item } = this.props;
    return (
      <View className='item'>
        <Image src={Item.img} className='item_img' />
        <Text className="item_text">{Item.title}</Text>
        <View className='item_'>
             <Text className="item_price">￥{Item.price}</Text>
        </View>
      </View>
    )
  }
}

