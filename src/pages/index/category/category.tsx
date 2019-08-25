import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

interface IAppProps {
    data?: any;
}
export default class Category extends Component<IAppProps,{}> {
  static defaultProps = {
    data: {}
  }

  render () {
    const { data: { categoryList = [] } } = this.props
    return (
      <View className='home-category'>
        <View className='home-category_two'>
          {categoryList.slice(0, 2).map((item, index) => (
            <View
              key={index}
              className={classNames('home-category_two-item',
                `home-category_two-item--index-${index}`
              )}
            >
              <View className='home-category_two-item-wrap'>
                <Text className='home-category_two-item-name'>{item.categoryName}</Text>
                <View className='home-category_two-item-line' />
              </View>
              <Image className='home-category_two-item-img' src={item.picUrl} />
            </View>
          ))}
        </View>
        <View className='home-category_list'>
          {categoryList.slice(2, 10).map((item, index) => (
            <View key={index} className='home-category_list-item'>
              <Text className='home-category_list-item-name'>{item.categoryName}</Text>
              <Image className='home-category_list-item-img' src={item.picUrl} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}