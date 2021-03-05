
import React, { useEffect, useState } from 'react'

import { View, Text } from '@tarojs/components'

import { AtButton, AtNavBar, AtIcon, AtTabs } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入

import NavBar from '@/element/NavBar/index'

import Tab from '@/element/Tabs/Index.ts'

import keepAlive from '@/utils/common1'

import Tip from '@/utils/tip'

import './index.scss'



const arr = new Array(10).fill(0).map( (item, index) => index)

const pFn = (): any => {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve({code: 200, data: arr})
    }, 2000)
  })
}

const Index: React.FC = () => {

  const [ state, setState ] = useState<boolean>(false)

  const [ indexList, setIndexList] = useState<string[]>([]) 

  const [ loading, setLoading ] = useState<boolean>(false)

  const [ finished, setFinished] = useState<boolean>(false)

  const fn = async () => {
    setState(true)
    console.log('我会触发么');
    
    const {code, data} = await pFn()
   
    console.log(code, data);
    setIndexList( _indexList => [...indexList, ...data])
    setState(false)
  }

  const onLoad = async () => {
    console.log('上拉加载');
    setLoading(true)
    const {code, data} = await pFn()
    setLoading(false)
    if (code === 200) {
      if (indexList.length >= 60) {
        setFinished(true)
        return
      }
      setIndexList( _indexList => [...indexList, ...data])
    }
  }

  return (
    <View className='index'>
      <NavBar title='navbar' icon={<AtIcon value='chevron-left' size='20' color='#000'></AtIcon>} />
      <Tab.Tabs
        tabList={[
          {title: '张三'},
          {title: '李四'},
          {title: '王二'},
          {title: '小一'},
          {title: '中德'},
          {title: '智慧'},
        ]}
      >
        <Tab.Item>
          1
        </Tab.Item>
        <Tab.Item>
          2
        </Tab.Item>
        <Tab.Item>
          3
        </Tab.Item>
        <Tab.Item>
          4
        </Tab.Item>
        <Tab.Item>
          5
        </Tab.Item>
        <Tab.Item>
          6
        </Tab.Item>
      </Tab.Tabs>
    </View>
  )

}

class Home extends React.Component {

  state = {
    name: 'string'
  }

  render () {
    const { name } = this.state
    return (
      <View>{name}</View>
    )
  }
  
}

export default keepAlive(Home)