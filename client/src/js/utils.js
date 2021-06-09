export const getCostOptions = (option)=>{
    const costOneOptions = 1000
    let sum = 0
    for (let key in option){
        if(option[key]){
            sum++
        }
    }    
    return sum*costOneOptions
}

export const getFullPrice = (start, end, price) =>{
    const arendaDays = arendaDay(start, end)
    return arendaDays * price
}

export const getCostArenda = (start, end, fiveDays, threeDaye, price) =>{
    const arendaDays = arendaDay(start, end)
    if(arendaDays >= 5){
        return arendaDays * fiveDays
    }else if(arendaDays >= 3){
        return arendaDays * threeDaye
    }else{
        return arendaDays * price
    }
}

export const arendaDay = (startDay, endDay) =>{
    const oneDay = 1000*60*60*24; 
    const start = new Date(startDay)
    const end = new Date(endDay)
    return Math.round((end.getTime()-start.getTime())/oneDay)+1
} 