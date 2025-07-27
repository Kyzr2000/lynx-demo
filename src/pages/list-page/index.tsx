import './index.css'
import { useMainThreadRef, useRef } from '@lynx-js/react'
import { MainThread, type NodesRef, type ScrollEvent } from '@lynx-js/types'
import type { Picture } from '../../assets/furnitures/furnituresPictures.js'
import { adjustScrollbarMTS, NiceScrollbarMTS } from './NiceScrollbarMTS.js'
import { calculateEstimatedSize } from '../../utils.js'
import LikeImageCard from '../../Components/LikeImageCard.js'

export const Gallery = (props: {
  pictureData: Picture[]
  setPicture: Function
}) => {
  const { pictureData, setPicture } = props
  const scrollbarMTSRef = useMainThreadRef<MainThread.Element>(null)
  const galleryRef = useRef<NodesRef>(null)

  const onScrollMTS = (event: ScrollEvent) => {
    'main thread'
    adjustScrollbarMTS(
      event.detail.scrollTop,
      event.detail.scrollHeight,
      scrollbarMTSRef
    )
  }

  return (
    <view className="gallery-wrapper">
      <NiceScrollbarMTS main-thread:ref={scrollbarMTSRef} />
      <list
        ref={galleryRef}
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
        main-thread:bindscroll={onScrollMTS}>
        {pictureData.map((picture: Picture, index: number) => (
          <list-item
            bindtap={() => {
              setPicture(picture)
            }}
            estimated-main-axis-size-px={calculateEstimatedSize(
              picture.width,
              picture.height
            )}
            item-key={'' + index}
            key={'' + index}>
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  )
}

export default Gallery
