
import React,{Component} from 'react'
import {Image, ScrollView, Text, View} from "@tarojs/components";

class PageView extends Component {
  constructor() {
    super(...arguments)
  }
  componentDidMount() {
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  render() {
    const scrollStyle = {
      width:'auto',
      overflow: 'hidden',
      marginTop:'10rpx',
      borderTop:'1px solid #6c6262',
      borderBottom:'1px solid #6c6262'


    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: 'auto',
      marginRight: '30rpx',
      display:'flex',
      flexFlow:'column',
      alignItems:'center'
      // display: 'inline-block',
    }
    const divStyle = {
      width: '100%',
      height: '307rpx',
      overflow: 'hidden',
      padding: '20rpx',
      background: '#fff',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      flexFlow:'column',
      alignItems:'center'
    }
    const Image_View = {
      display: 'inline-flex',
    }
    const image_Stype = {
      height:'100rpx',
      width:'100rpx',
      marginTop: '10rpx'

    }
    var Images_Item = [
      {
        img: require('../../images/xl.png'),
        value:'旅游线路',
      },
      { img: require('../../images/pw.png'),
        value:'旅游票务'
      },
      {
        img:require('../../images/zt.png'),
        value:'旅游主题'
      },
      {
        img : require('../../images/lyjd.png'),
        value:'旅游景点'
      },
      {
        img: require('../../images/zn.png'),
        value :'旅游指南'
      },
      {
        img: require('../../images/lyc.png'),
        value: '旅游车'
      },
      {
        img : require('../../images/whdk.png'),
        value : '网红打卡'
      },
      {
        img : require('../../images/jqqd.png'),
        value : '敬请期待'
      }
    ]
    return (
        <ScrollView
          className='scrollview'
          scrollX
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View style={Image_View}>
            {
              Images_Item.map( (row,index) => {
                return (
                  <View style={vStyleA}>
                    <View style={Image_View}><Image style={image_Stype} src={row.img}/></View>
                    <Text style={{fontSize:'25rpx',marginBottom:'10rpx'}}>{row.value}</Text>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
    )
  }
}
export default PageView
