import { gql } from '@apollo/react-hooks'

export const FETCH_FILTER_AUTO = gql`
query FilterAuto($arendaInput:ArendaInput!){
  filterAuto(arendaInput:$arendaInput){
    id
    mark
    model
    year
    number
    vin
    collor
    volume
    power
    transmission
    mileage
    pts
    price
    priceThreeDays
    priceFiveDays
    osago
    kasko
    privod
    motor
    body
    sts
    type
    arenda{
      startDay
      endDay
    }   

  } 
}
`

export const FETCH_ALL_AUTO =gql`
{
  getAllAutos{
    privod
  }
}
`