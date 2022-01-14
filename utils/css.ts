export const getProperty = (varName: string) =>
  getComputedStyle(document.documentElement).getPropertyValue('--' + varName)

export const setProperty = (varName: string, val: string) => {
  document.documentElement.style.setProperty('--' + varName, val)
}
