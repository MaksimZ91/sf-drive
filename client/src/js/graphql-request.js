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
    user{
      fio
    }  

  } 
}
`

export const FETCH_USER_ARENDA_HISTORY = gql`
query UserArendaHistory($userArendaInput:UserArendaInput!){
  userArendaHistory(userArendaInput:$userArendaInput){  
    id
    startDay
    endDay
    cost
    coment
    babyChair
    deliveryAuto
    close
    fullTank 
    auto{
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
    }    
  }
}
`

export const FETCH_ARENDA =gql`
query FindeArenda ($findeArendaInput:FindeArendaInput){
  findeArendaByID(findeArendaInput:$findeArendaInput){
    id
    startDay
    endDay
    cost
    coment
    babyChair
    deliveryAuto
    close
    fullTank 
    auto{
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
    }
    user{
      id
      fio
    }
  }
}
`

export const DELETE_ARENDA = gql`
mutation DeleteArenda ($findeArendaInput:FindeArendaInput) {
  deleteArenda(findeArendaInput:$findeArendaInput){    
    startDay
    endDay
    cost
    coment
    babyChair
    deliveryAuto
    close
    fullTank 
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