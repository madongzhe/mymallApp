import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import rightArrow from './assets/right-arrow.png'
import './index.scss'

interface IAppProps{
  data:any
}
export default class InfoBase extends Component<IAppProps> {
  static defaultProps = {
    data: {}
  }

  render () {
    const { data } = this.props
    const { itemStar = {}, tagList = [] } = data

    return (
      <View className='item-info-base'>
        <View className='item-info-base__header'>
          <View className='item-info-base__header-wrap'>
            <Text className='item-info-base__header-name'>{data.title}</Text>
            <Text className='item-info-base__header-desc'>{data.sub_title}</Text>
          </View>
          <View className='item-info-base__header-star'>
            <Text className='item-info-base__header-star-txt'>
              {`${parseFloat(itemStar.good_cmt_rate) || 0}%`}
            </Text>
            <Text className='item-info-base__header-star-link'>{'好评率>'}</Text>
          </View>
        </View>

        <View className='item-info-base__price'>
          <Text className='item-info-base__price-symbol'>¥</Text>
          <Text className='item-info-base__price-txt'>
            {data.activity_price || data.retail_price}
          </Text>
          {!!data.activity_price &&
            <Text className='item-info-base__price-origin'>
              ¥{data.retail_price}
            </Text>
          }
        </View>

        {!!tagList.length &&
          <View className='item-info-base__tag'>
            {tagList.map(item => (
              <View key={item.id} className='item-info-base__tag-item'>
                <Text className='item-info-base__tag-item-txt'>{item.tagName}</Text>
                <Image className='item-info-base__tag-item-img' src={rightArrow} />
              </View>
            ))}
          </View>
        }
      </View>
    )
  }
}
