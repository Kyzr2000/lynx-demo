import type { Picture } from '../assets/furnitures/furnituresPictures.js'

export default function LikeImageCard(props: { picture: Picture }) {
  const { picture } = props

  return (
    <view className="picture-wrapper">
      <image
        style={{ width: '100%', aspectRatio: picture.width / picture.height }}
        src={picture.src}
      />
    </view>
  )
}
