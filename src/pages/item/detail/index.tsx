import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import './index.scss'

interface IAppProps {
  html: any,
}
export default class Detail extends Component<IAppProps> {
  static defaultProps = {
    html: ''
  }

  render () {
    const { html } = this.props

    // XXX 这边直接把 img 提取出来展示，没有用 RichText


    return (
      <View className='item-detail'>
        <RichText nodes={html}/>
      </View>
    )
  }
}
