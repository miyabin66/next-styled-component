import { DeviceTypes, SizeUnit } from '~/interfaces/enums/common'
import { designHeight, designWidth } from '~/services/common'

export const vw = (val: number) => {
  return `calc(${val} * var(--vw, 1vw))`
}

export const vh = (val: number) => {
  return `calc(${val} * var(--vh, 1vh))`
}

const _px = (val: number) => {
  return `${val / 2}px`
}

export const px = (...args: number[]) => {
  return args.map((v) => _px(v)).join(' ')
}

const pxToVw = (px: number, deviceType: DeviceTypes) => {
  const val = (px / designWidth[deviceType]) * 100
  return vw(val)
}

export const pxVw = {
  [DeviceTypes.PC]: (...args: number[]) =>
    args.map((v) => pxToVw(v, DeviceTypes.PC)).join(' '),
  [DeviceTypes.Tablet]: (...args: number[]) =>
    args.map((v) => pxToVw(v, DeviceTypes.Tablet)).join(' '),
  [DeviceTypes.SP]: (...args: number[]) =>
    args.map((v) => pxToVw(v, DeviceTypes.SP)).join(' '),
}

const pxToVh = (px: number, deviceType: DeviceTypes) => {
  const val = (px / designHeight[deviceType]) * 100
  return vh(val)
}

export const pxVh = {
  [DeviceTypes.PC]: (px: number) => pxToVh(px, DeviceTypes.PC),
  [DeviceTypes.Tablet]: (px: number) => pxToVh(px, DeviceTypes.Tablet),
  [DeviceTypes.SP]: (px: number) => pxToVh(px, DeviceTypes.SP),
}

/**
 * @param fontSize {number} figmaの値をnumberとして渡す
 * @param fontStyleValue {number | string} figmaのCSSフォントスタイル値を渡す。
 * @returns pxの場合はnumberとして渡し、内部でemに変換して返す。'normal'などstringで渡ってきた場合はそのまま返す。
 */

const calculateFontStyleValue = (
  fontSize: number,
  fontStyleValue: number | string,
) => {
  const isNumber = typeof fontStyleValue === 'number'
  return isNumber ? `${Number(fontStyleValue) / fontSize}em` : fontStyleValue
}

/**
 * @param unitType {DeviceTypes | SizeUnit} デバイスや単位を指定する
 * @param fontSize {number} figmaの値をnumberとして渡す
 * @param letterSpacing {number | string} figmaのそのまま渡す。pxの値を渡したい場合はnumberとして渡し、内部でemに変換する。
 * @param lineHeight: {number | string} figmaのそのまま渡す。pxの値を渡したい場合はnumberとして渡し、内部でemに変換する
 * @returns
 */
export const font = (
  unitType: DeviceTypes | SizeUnit,
  fontSize: Parameters<typeof calculateFontStyleValue>[0],
  lineHeight?: Parameters<typeof calculateFontStyleValue>[1],
  letterSpacing?: Parameters<typeof calculateFontStyleValue>[1],
) => {
  return `
    font-size: ${
      unitType === SizeUnit.Px ? px(fontSize) : pxVw[unitType](fontSize)
    };
    line-height: ${lineHeight || 'normal'};
    letter-spacing: ${letterSpacing || 'normal'};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  `
}

export const ReadImageCSS = (imgSrc: string) => {
  return `
    background-image: url(${imgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  `
}

type sizeTypes = number | string

export const size = (
  unitType: DeviceTypes | SizeUnit,
  width: sizeTypes,
  height: sizeTypes,
) => {
  const renderUnit = (value: number) =>
    unitType === SizeUnit.Px ? px(value) : pxVw[unitType](value)
  const _w = typeof width === 'number' ? renderUnit(width) : width
  const _h = typeof height === 'number' ? renderUnit(height) : height

  return `
    width: ${_w};
    height: ${_h};
  `
}

export const maxSize = (width: number, height: number) => {
  return `
    max-width: ${px(width)};
    max-height: ${px(height)};
  `
}

type posTypes = number | string | null

export const pos = (
  unitType: DeviceTypes | SizeUnit,
  top: posTypes,
  right: posTypes,
  bottom: posTypes,
  left: posTypes,
) => {
  const renderUnit = (value: number) =>
    unitType === SizeUnit.Px ? px(value) : pxVw[unitType](value)
  const _t = typeof top === 'number' ? renderUnit(top) : top
  const _r = typeof right === 'number' ? renderUnit(right) : right
  const _b = typeof bottom === 'number' ? renderUnit(bottom) : bottom
  const _l = typeof left === 'number' ? renderUnit(left) : left

  return `
    ${_t ? `top: ${_t};` : ''}
    ${_r ? `right: ${_r};` : ''}
    ${_b ? `bottom: ${_b};` : ''}
    ${_l ? `left: ${_l};` : ''}
  `
}
