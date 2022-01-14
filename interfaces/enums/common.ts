const maxViewport = {
  SP: 750,
  Tablet: 1180,
  PC: 10000,
}

export const DeviceTypes = <const>{
  SP: 'SP',
  Tablet: 'Tablet',
  PC: 'PC',
}

export const SizeUnit = <const>{
  Px: 'Px',
}

export const BreakPoint = <const>{
  SP: {
    min: 0,
    max: maxViewport[DeviceTypes.SP],
  },
  PC: {
    min: maxViewport[DeviceTypes.SP] + 1,
    max: maxViewport[DeviceTypes.PC],
  },
}

export type DeviceTypes = typeof DeviceTypes[keyof typeof DeviceTypes]
export type SizeUnit = typeof SizeUnit[keyof typeof SizeUnit]
export type BreakPoint = typeof BreakPoint[keyof typeof BreakPoint]
