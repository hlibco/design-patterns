import { CarProxy, Driver } from '../../../GoF/structural/proxy'

describe('proxy', () => {
  test('driver < 18', () => {
    const driver = new Driver(15)
    const carProxy = new CarProxy(driver)

    expect(() => carProxy.drive()).toThrow()
  })

  test('driver >= 18', () => {
    const driver = new Driver(18)
    const carProxy = new CarProxy(driver)

    expect(carProxy.drive()).toBe('driving')
  })
})
