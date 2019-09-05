import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

interface IAppProps{
    list:Array<any>
}
export default class List extends Component<IAppProps> {
  static defaultProps = {
    list: []
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: `/pages/cate-sub/cate-sub?subId=${item.id}&categoryId=${item.superCategoryId}`
    })
  }

  render () {
    const { list } = this.props
    return (
      <View className='cate-list'>
        {list.map(group => (
          <View key={group.id} className='cate-list__group'>
            {!!group.name &&
              <View className='cate-list__title'>
                <Text className='cate-list__title-txt'>{group.name}</Text>
              </View>
            }
            <View className='cate-list__wrap'>
              {group.categoryGroupList?group.categoryGroupList.map((item, index) => (
                <View
                  key={item.id}
                  className={classNames('cate-list__item',
                    { 'cate-list__item--right': (index + 1) % 3 === 0 }
                  )}
                  onClick={this.handleClick.bind(this, item)}
                >
                  <Image className='cate-list__item-img' src={item.image_url} />
                  <View className='cate-list__item-txt-wrap'>
                    <Text className='cate-list__item-txt'>{item.name}</Text>
                  </View>
                </View>
              )):''}
            </View>
          </View>
        ))}
      </View>
    )
  }
}