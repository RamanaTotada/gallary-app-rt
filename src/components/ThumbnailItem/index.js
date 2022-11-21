import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, upadateThumbnailImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickImage = () => {
    upadateThumbnailImage(id)
  }

  const removeOpacity = isActive ? 'open-blur' : 'image-style'
  return (
    <li className="image-list">
      <button className="button-style" type="button" onClick={onClickImage}>
        <img
          className={`image-style ${removeOpacity}`}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
