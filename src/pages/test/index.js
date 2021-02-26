import React from 'react'
import {View, Text, Button, Swiper, SwiperItem,Image} from '@tarojs/components'

const Test = () => {
  const hangleonChilk = () => {
    wx.navigateTo({
      url:'../../pages/pathA/index'
    })
  }
  return (
    <View>
      <Text>
        测试页面
      </Text>
      <Swiper
        indicator-dots={true}
        autoplay={true}
      >
        <SwiperItem>
          <Image src={require("./images/1.jpg" )} />
        </SwiperItem>
        <SwiperItem>
          <Image src={require("./images/2.jpg" )} />
        </SwiperItem>
      </Swiper>
      <Button onClick={hangleonChilk}>跳转</Button>
    </View>
  )
}
export default Test
