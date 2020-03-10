import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

interface IAppProps {
    Item: any,
}
export default class Item extends Component<IAppProps> {
  static defaultProps = {
    Item: {}
  }
  handleClick = (id) => {
    Taro.navigateTo({
      url: `/pages/item/index?itemId=${id}`
    })
  }
  render () {
    const { Item } = this.props;
    return (
      <View className='goods_item' onClick={this.handleClick.bind(this,Item.goods_id)}>
        <View className='goods_item_m'>
          {Item.goods_image?<Image src={Item.goods_image.split(',')[0]} className='goods_item_img' />:''}
          <Text className='goods_item_title'>{Item.goods_name}</Text>
          <View className=''>
              <Text className='goods_item_price'>￥{Item.activity_price}</Text>
          </View>
        </View>
      </View>
    )
  }
}

