import { createContext, ReactNode, useContext, useState } from 'react'
import { UAParser } from 'ua-parser-js'
import { DeviceTypes } from '~/interfaces/enums/common'
import { useHasTouchScreen } from '~/hooks/useHasTouchScreen'
import { useIsomorphicEffect } from '~/hooks/useIsomorphicEffect'

type Type = {
  deviceType: DeviceTypes
}

interface UA {
  isSP: boolean
  isTablet: boolean
  isPC: boolean
}

const defaultValues: Type = {
  deviceType: DeviceTypes.PC,
}

const DeviceContext = createContext(defaultValues)

const useValues = (): Type => {
  const isomorphicEffect = useIsomorphicEffect()
  const { hasTouchScreen } = useHasTouchScreen()

  const [deviceType, setDeviceType] = useState<DeviceTypes>(
    defaultValues.deviceType,
  )

  const parser = new UAParser()
  const device = parser.getDevice().type

  const [ua, setUA] = useState<UA>({
    isSP: true,
    isTablet: false,
    isPC: false,
  })

  // iPad proなど一部の端末はUA判定してもPCとして返ってくるので
  // タッチできるデバイスかつUAがPCのものもタブレットとして扱う
  const [isTablet, setIsTablet] = useState<boolean>(false)

  // UA判定
  isomorphicEffect(() => {
    setUA({
      isSP: device === 'mobile',
      isTablet: device === 'tablet',
      isPC: device === undefined,
    })
  }, [device])

  // タブレット判定
  isomorphicEffect(() => {
    setIsTablet(ua.isTablet || (ua.isPC && hasTouchScreen))
  }, [hasTouchScreen, ua])

  // デバイス判定
  isomorphicEffect(() => {
    const device = () => {
      if (ua.isSP) {
        return DeviceTypes.SP
      } else if (isTablet) {
        return DeviceTypes.Tablet
      } else {
        return DeviceTypes.PC
      }
    }
    setDeviceType(device())
  }, [isTablet, ua])

  return {
    deviceType,
  }
}

const DeviceContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DeviceContext.Provider value={useValues()}>
      {children}
    </DeviceContext.Provider>
  )
}

const useDeviceContext = () => useContext(DeviceContext)

export { useDeviceContext, DeviceContextProvider }
