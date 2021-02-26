import { usePageScroll, useReachBottom } from '@tarojs/taro'
import React,{ useState, useEffect } from 'react'
import {View, Text, Button, Swiper, SwiperItem, Image} from '@tarojs/components'
import PageView from "../pageview/index.js";
import BoutiqueTour from "../boutiqueTour/index.js";
const title_data = require('../../../data/mockdata/')

const imagesItem = [
  require('../../images/sqpl.jpg'),
  require('../../images/beijing.jpg'),
  require('../../images/yunnan.jpg'),
  require('../../images/shanghai.jpg'),
]


const Child = () => {
  useEffect(() => {
    console.log(title_data)
  },[])
  const swiper_stype = {
    width: '750rpx',
    height:'100%'
  }
  return (
    <View>
      <Swiper
        indicator-dots
        autoplay
      >
          {imagesItem.map((ref) => {
            return (
                <SwiperItem>
                  <Image style={swiper_stype} src={ref} />
                </SwiperItem>
            )
          })}
      </Swiper>
      <PageView/>
      <BoutiqueTour/>
    </View>
  )
}
export default Child
