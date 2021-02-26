import React from 'react'
import {Text, View} from "@tarojs/components";

const BoutiqueTour = () => {
  const boutique_tour = [
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    },
    {
      title: '好团不用等',
      time:'2020-2-1'
    }
  ]
  const recommend = {
    fontWeight:500,
    fontSize:30,

  }
  const recommends = {
    marginTop:'10rpx',
    marginBottom:'10rpx',

  }
  const boutique = {
    borderBottom:'1px dashed #6c6262',
    marginTop: '10rpx',
    position:'relative',
    paddingBottom: '10rpx'
  }
  const text_time = {
    position : 'absolute',
    right:'1%'
  }
  return (
    <View>
      <View style={recommends}>
        <Text style={recommend}>好团推荐:</Text>
      </View>
      {
        boutique_tour.map((ref,index) => {
          return(
            <View style={boutique}>
              <Text>{ref.title}</Text>
              <Text style={text_time}>{ref.time}</Text>
            </View>
          )
        })
      }
    </View>
  )
}
export default BoutiqueTour
