import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { Loading } from '@/components'
import * as actions from '../../actions/home'
import './index.scss'
import Banner from './banner/banner';
import searchIcon from './assets/search.png'
import Box from './box';
import Recommend from './recommend';

interface IAppProps {
  dispatchHome?: any,
  dispatchRecommend?: any,
  homeInfo: any,
  recommend: Array<any>
}
interface IAppState {
  imageList?: any,
  boxlist?: any,
  loaded?: boolean
}
@connect(state => state.home, { ...actions })
export default class Index extends Component<IAppProps,IAppState> {
  constructor (props: any) {
    super(props)
    this.state = {
      boxlist:[{icon:'',desc:'活动'}],
      loaded:false,
    }
  }
  config: Config = {
    navigationBarTitleText: '首页'
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  componentWillMount () { 
    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true},function(){
      })
    })
    this.recommend(1);
  }
  // 推荐商品
  recommend = (page) => {
    let size = 10;
    this.props.dispatchRecommend(page, size).then(() => {
      this.setState({ loaded: true},function(){
      })
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
    if (!this.state.loaded) {
      return <Loading />
    }
    const { homeInfo, recommend } = this.props
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
        {homeInfo.banner?<Banner data={homeInfo.banner}></Banner>:''}
        <Box list={homeInfo.grid}></Box>
        <Recommend list={recommend}/>
      </View>
    )
  }
}
