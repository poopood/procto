

 const nameSorter = (filter, arr) => {
    let sortedByName;
            if(filter){
                sortedByName = arr.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                return 0
            })

            } else{
                 sortedByName = arr.sort((b,a) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                return 0
              })
            }

    return sortedByName
}

const skuSorter = (filter,arr) => {
    let sortedBySKU;
        if(filter){
            sortedBySKU = arr.sort((a,b) => {
                
            return a.sku - b.sku

            
        })

        } else{
            sortedBySKU = arr.sort((b,a) => {
            
            return a.sku - b.sku
            })
        }

    return sortedBySKU
}


const priceSorter = (filter,arr) => {
    let sortedByPrice;
        if(filter){
            sortedByPrice = arr.sort((a,b) => {
                
            
            return a.price - b.price

            
        })

        } else{
            sortedByPrice = arr.sort((b,a) => {
            
            return a.price - b.price
            })
        }

        return sortedByPrice;
}

const availabilitySorter = (filter,arr) => {
    let sortedByAvailability;
    if(filter){
        sortedByAvailability = arr.sort((a,b) => {
            
        
        return a.available - b.available
    })

    } else{
        sortedByAvailability = arr.sort((b,a) => {
        
        return a.available - b.available
        })
    }

    return sortedByAvailability;
}


export {nameSorter, skuSorter, priceSorter, availabilitySorter}