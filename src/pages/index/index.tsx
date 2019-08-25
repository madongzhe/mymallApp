import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/home'
import './index.scss'
import Banner from './banner/banner';
import searchIcon from './assets/search.png'
import Box from './box';

interface IAppProps {
  dispatchHome?: any;
}
interface IAppState {
  imageList?: any,
  boxlist?:any,
  loaded?:boolean
}
@connect(state => state.home, { ...actions })
export default class Index extends Component<IAppProps,IAppState> {
  constructor (props: any) {
    super(props)
    this.state = {
      imageList: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/40562/22/12397/68593/5d5d0f35E1c2ba9ce/500a6636eb143396.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/66806/36/7721/128049/5d5a9289Ef928d43a/20b8facda3fd787d.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        ],
      boxlist:[{icon:'',desc:'活动'}],
      loaded:false
    }
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  handlePrevent = () => {
    // XXX 时间关系，首页只实现底部推荐商品的点击
    Taro.showToast({
      title: '目前只可点击底部推荐商品',
      icon: 'none'
    })
  }
  render () {
    return (
      <View className='index'>
        <View className='home_search'>
          <View className='home_search-wrap' onClick={this.handlePrevent}>
            <Image className='home_search-img' src={searchIcon} />
            <Text className='home_search-txt'>
              搜索你要的商品
            </Text>
          </View>
        </View>
        <Banner data={this.state.imageList}></Banner>
        <Box list={this.state.boxlist}></Box>
        <View>
          <View>1</View>
          <View>2</View>
          <View>3</View>
          <View>4</View>
        </View>
      </View>
    )
  }
}
