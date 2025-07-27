import { useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import { Card } from './pages/card/index.js'
import { furnituresPictures } from './assets/furnitures/furnituresPictures.js'
import Gallery from './pages/list-page/index.js'

export function App(props: { onMounted?: () => void }) {
  const [isFirst, setIsFirst] = useState(false) // 区分首屏、商品列表页面
  const [picture, setPicture] = useState() // 是否点击商品

  // 显示后续内容
  const navigateHomePage = () => {
    console.log('已点击按钮')
    if (picture) setPicture(undefined)
    else setIsFirst(!isFirst)
  }
  useEffect(() => {
    console.info('Hello, ReactLynx')
    props.onMounted?.()
  }, [])

  return (
    <view>
      {!isFirst && (
        <view>
          <view className="Background" />
          <view className="App">
            <view className="Banner">
              <view className="Logo">
                <image src={lynxLogo} className="Logo--lynx" />
              </view>
              <view
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <text className="Title">lynx-demo</text>
                <text className="Subtitle">github.com/Kyzr2000/lynx-demo</text>
                <view className="enter-btn" bindtap={navigateHomePage}>
                  <text style={{ color: '#000', fontWeight: 'bold' }}>
                    点击进入
                  </text>
                </view>
              </view>
            </view>
            <view className="Content">
              <image src={arrow} className="Arrow" />
              <text className="Description">Tap the logo and have fun!</text>
              <text className="Hint">Kyzr2000 / 2025 for practice</text>
            </view>
            <view style={{ flex: 1 }}></view>
          </view>
        </view>
      )}
      {isFirst && (
        <view className="list-home-page">
          {/* 顶部占位（返回按钮、名称） */}
          <view className="list-home-top">
            <view className="list-home-top-btns">
              <view className="list-home-top-left" bindtap={navigateHomePage}>
                <text style={{ fontSize: '20px' }}>{'<'}</text>
              </view>
              <view className="list-home-top-view">
                <text style={{ fontSize: '20px' }}>
                  {picture ? 'My Info' : "Kyzr2000's list"}
                </text>
              </view>
              <view className="list-home-top-view"> </view>
            </view>
          </view>
          {picture && <Card picture={picture} />}
          {!picture && (
            <Gallery pictureData={furnituresPictures} setPicture={setPicture} />
          )}
        </view>
      )}
    </view>
  )
}
