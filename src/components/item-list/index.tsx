import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

interface IAppProps{
    list:Array<any>,
}
export default class ItemList extends Component<IAppProps> {
  static defaultProps = {
    list: []
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${item.id}`
    })
  }

  render () {
    const { list } = this.props
    return (
      <View className='comp-item-list'>
        <View className='comp-item-list_title'>
          {this.props.children}
        </View>
        <View className='comp-item-list_wrap'>
          {list.map(item => (
            <View
              key={item.id}
              className='comp-item-list_item'
              onClick={this.handleClick.bind(this, item)}
            >
              <Image className='comp-item-list_item-img' src={item.img.split(',')[0]} />
              <View className='comp-item-list_item-info'>
                {/* {!!item.limitedTag &&
                  <Tag text={item.limitedTag} />
                } */}
                {/* <Text className='comp-item-list_item-name' numberOfLines={1}>
                  {item.name}
                </Text> */}

                <View className='comp-item-list_item-price-wrap'>
                  <Text className='comp-item-list_item-price'>
                    ¥{item.activity_price || item.retail_price}
                  </Text>
                  {!!item.activity_price &&
                    <Text className='comp-item-list_item-price--origin'>
                      ¥{item.retail_price}
                    </Text>
                  }
                  <Text className='comp-item-list_item-distance'>100m</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
