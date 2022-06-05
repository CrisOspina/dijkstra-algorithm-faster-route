import {test, expect, describe} from 'vitest'
import {getFasterRoute} from './main'

describe('Traversed nodes', () => {
  test('Distance more faster between C and O', () => {
    const routes = {origin: 'C', destiny: 'O'}
    const response = 'C,B,J,K,N,O'
    expect(getFasterRoute(routes)).toEqual(response)
  })

  test('Distance more faster between A and P', () => {
    const routes = {origin: 'A', destiny: 'P'}
    const response = 'A,B,J,K,N,O,P'
    expect(getFasterRoute(routes)).toEqual(response)
  })

  test('Distance more faster between E and X', () => {
    const routes = {origin: 'E', destiny: 'X'}
    const response = 'E,F,G,H,U,V,W,X'
    expect(getFasterRoute(routes)).toEqual(response)
  })
})
