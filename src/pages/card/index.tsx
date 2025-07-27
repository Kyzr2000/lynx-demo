import type { Picture } from '../../assets/furnitures/furnituresPictures.js'
import './index.css'
export function Card(props: { picture: Picture }) {
  const { picture } = props
  return (
    <view className="card-container">
      <view className="card-content">
        <image
          src={picture.src}
          style={{ width: '100%', aspectRatio: picture.width / picture.height }}
        />
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            width: '100%',
          }}>
          <view className="card-introduction">
            <text className="card-title">家具名称：沙发椅</text>
            <text className="card-content">
              家具介绍：多道工程打磨，绝佳体验
            </text>
          </view>
          <view
            style={{
              width: '100%',
              gap: 5,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <view className="card-btn">
              <text style={{ fontSize: '20px' }}>收藏</text>
            </view>
            <view className="card-btn">
              <text style={{ fontSize: '20px' }}>购买</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  )
}
