import { CREATE_CAR, DELETE_CAR, GET_CAR, UPDATE_CAR } from  "../Constants"


export function createCar (data) {
  return {
    type:CREATE_CAR,
    payload:data
  }
}
export function getCar (data) {
  return {
    type:GET_CAR,
    
  }}

export function updateCar (data) {
  return {
    type:UPDATE_CAR,
    payload:data
  }
}


export function deleteCar (data) {
  return {
    type:DELETE_CAR,
    payload:data
  }
}


