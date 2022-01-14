import { css } from 'styled-components'

export const FlexCenterCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexSpaceBetweenCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AbsoluteCenterCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const HideScrollBar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const PushButton = css`
  transform-origin: center;

  &:active {
    transform: scale(0.9);
  }
`

export const ReadyFadeInFromUnder = css`
  opacity: 0;
  transform: translate(0, 20px);
`
