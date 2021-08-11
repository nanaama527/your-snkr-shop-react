export const fetchSneakers=()=>{

    return (dispatch)=>{

        fetch('http://localhost:3000/sneakers')
        .then(resp => resp.json())
        .then(sneakers => {  console.log(sneakers)  
    
            dispatch({ type: "FETCH_SNEAKERS", payload: sneakers })
    
        })

    }
}



export const fetchBrandSneakers=(brandId)=>{

    return (dispatch)=>{

        fetch(`http://localhost:3000/brands/${brandId}/sneakers`)
        .then(resp => resp.json())
        .then(brandSneakers => {  console.log(brandSneakers)  
    
            dispatch({ type: "FETCH_BRAND_SNEAKERS", payload: brandSneakers })
    
        })

    }
}











export const createNEWSneaker =(newSneaker)=>{
    return (dispatch)=>{

        fetch("http://localhost:3000/sneakers", {
                
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({

                "name": newSneaker.name,
                "image": newSneaker.image,
                "brand_id": newSneaker.brand_id
                    
            })
        
         })
        .then(resp => resp.json())
        .then(newSneak => {  console.log(newSneak)  
    
            dispatch({ type: "ADD_SNEAKER", payload: newSneak })
    
        })

    }

    

}






export const deleteSneaker =(sneakerToDelete)=>{
    //return(dispatch)=>{
        console.log(sneakerToDelete)
        console.log(sneakerToDelete.id)
        fetch(`http://localhost:3000/sneakers/${sneakerToDelete.id}`, {
                    
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
            
        })
        // .then(resp => resp.json())
            // .then(newSneak => {  console.log(newSneak)  
            return(dispatch)=>{
                dispatch({ type: "DELETE_SNEAKER", payload: sneakerToDelete })
            }
        // })
        
    // }

}

