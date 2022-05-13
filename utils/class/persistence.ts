export default class Persistence<T> {
  resource: string

  constructor(resource: string) {
    this.resource = resource
  }

  private _type(ctor: { new (): T }) {
    return new ctor()
  }

  private _isT(arg: unknown): arg is T {
    return typeof arg === typeof this._type
  }

  public get value(): T {
    const _v = window.localStorage.getItem(this.resource)

    if (typeof this._type === 'string' && this._isT(_v)) {
      return _v
    } else if (typeof this._type === 'boolean') {
      const b = _v === 'true'
      if (this._isT(b)) {
        return b
      }
    }

    try {
      return JSON.parse(`${_v}`)
    } catch (_e) {
      throw new Error(`${_e}`)
    }
  }

  public set = (value: T): void => {
    if (!value) return
    window.localStorage.setItem(this.resource, JSON.stringify(value))
  }

  public remove = (): void => {
    window.localStorage.removeItem(this.resource)
  }
}

export const clearAll = () => {
  window.localStorage.clear()
}
