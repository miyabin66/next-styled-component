import { BreakPoint, DeviceTypes } from '~/interfaces/enums/common'

interface MinMaxBP {
  min: number
  max: number
}

const mq = (bp: MinMaxBP) => `
  @media (min-width: ${bp.min}px) and (max-width: ${bp.max}px)
`

// 横向き対応
const orientation = (bp: MinMaxBP) => `
  @media (orientation: landscape) and (min-width: ${bp.min}px) and (max-width: ${bp.max}px)
`

const sp = mq(BreakPoint[DeviceTypes.SP])
const pc = mq(BreakPoint[DeviceTypes.PC])
const landscape = orientation(BreakPoint[DeviceTypes.SP])

const media = {
  sp,
  pc,
  landscape,
}

export default media
