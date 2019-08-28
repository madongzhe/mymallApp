import Taro, { Component } from '@tarojs/taro'
import { Loading, Item } from '@components'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface IAppProps{
    list: Array<any>
}
export default class Recommend extends Component<IAppProps> {
    static defaultProps = {
      list: []
    }
    
    handleClick = (id) => {
        Taro.navigateTo({
          url: `/pages/item/item?itemId=${id}`
        })
      }
      render () {
        const { list } = this.props
        return (
            <View className='home-recommend'>
                <View className='home-recommend__title'>
                    <Text className='home-recommend__title-txt'>为你推荐</Text>
                </View>
                <View className='home-recommend__list'>
                {list?list.map((item)=>{
                    return <Item key={item.id} Item={item}/>
                }):<Loading />}
                </View>
            </View>
        )
}