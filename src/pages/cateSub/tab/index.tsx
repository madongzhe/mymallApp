import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'

interface IAppProps{
    onChange:any,
    list:Array<any>,
    current:any,
}
export default class Banner extends Component<IAppProps> {
  static defaultProps = {
    list: [],
    onChange: () => {}
  }

  handleClick = (index) => {
    this.props.onChange(index)
  }

  render () {
    const { list, current } = this.props
    // XXX 暂未实现 tab item 与内容区域的同步滚动
    return (
      <ScrollView
        scrollX
        className='cate-sub-tab'
      >
        {list.map((item, index) => (
          <View
            key={item.id}
            className='cate-sub-tab__item'
            onClick={this.handleClick.bind(this, index)}
          >
            <Text className='cate-sub-tab__item-txt'>{item.name}</Text>
            {index === current &&
              <View className='cate-sub-tab__item-line' />
            }
          </View>
        ))}
      </ScrollView>
    )
  }
}
