import Taro, { Component } from '@tarojs/taro'
import { SwiperItem, View, Swiper, Image } from '@tarojs/components'
import './banner.scss'

interface IAppProps {
    data?: any;
}
interface IAppState {
    data: Array<any>
}
export default class Banner extends Component<IAppProps,IAppState> {
    constructor (props: any) {
        super(props)
        this.state = {
          data: this.props.data
        }
      }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const SwiperItems = this.state.data.map((itme, i) => {
    return <SwiperItem className='item' key={i}>
                <View>
                  <Image className='image' src={itme.img_url} mode='widthFix'></Image>
                </View>
              </SwiperItem>
      })
    return (
        <Swiper
          className='swiper-banner'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          >
            { SwiperItems }
      </Swiper>
    )
  }
}
