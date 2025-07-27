import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'

export function App(props: {
  onMounted?: () => void
}) {
  const [isFirst,setIsFirst] = useState(false); // 区分首屏、商品列表页面
  useEffect(() => {
    console.info('Hello, ReactLynx')
    props.onMounted?.()
  }, [])

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo'>
            <image src={lynxLogo} className='Logo--lynx' />
          </view>
          <view style={{display:"flex",flexDirection:"column",gap:10,justifyContent:"center",alignItems:"center"}}>
            <text className='Title'>React</text>
            <text className='Subtitle'>github.com/Kyzr2000/lynx-demo</text>
          </view>
        </view>
        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>
            Kyzr2000 / 2025 for practice
          </text>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  )
}
