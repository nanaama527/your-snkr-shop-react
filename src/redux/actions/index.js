export const fetchSneakers=()=>{

    return (dispatch)=>{

        fetch('http://localhost:3000/sneakers')
        .then(resp => resp.json())
        .then(sneakers => {  console.log(sneakers)  
    
            dispatch({ type: "FETCH_SNEAKERS", payload: sneakers })
    
        })

    }
}


export const deleteSneaker =(sneakerToDelete)=>{

    return{

        type: "DELETE_SNEAKER", payload: sneakerToDelete

    }

}

