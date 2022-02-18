import styled from 'styled-components'
import { BreakPoint, DeviceTypes, ImageType } from '~/interfaces/enums/common'

type Props = {
  src: string
  alt?: string
  type?: ImageType
}

const Picture = styled.picture`
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Pictures = ({ src, alt = '', type = ImageType.png }: Props) => {
  const minWidth = `(max-width: ${BreakPoint[DeviceTypes.SP].max}px)`

  return (
    <Picture>
      <source
        srcSet={require(`~/assets/images/sp/${src}.${type}`).default}
        media={minWidth}
      />
      <Image
        src={require(`~/assets/images/pc/${src}.${type}`).default}
        alt={alt}
      />
    </Picture>
  )
}

export default Pictures
