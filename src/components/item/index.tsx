import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { host_img } from '@constants/api'
import './index.scss'

interface IAppProps {
    Item: any;
}
export default class Item extends Component<IAppProps> {
  static defaultProps = {
    Item: {}
  }
  render () {
    const { Item } = this.props;
    return (
      <View className='goods_item'>
        {Item.img?<Image src={ host_img + Item.img.split(',')[0]} className='goods_item_img' />:''}
        <Text className="goods_item_title">{Item.title}</Text>
        <View className='item_'>
            <Text className="goods_item_price">￥{Item.prices}</Text>
        </View>
      </View>
    )
  }
}

