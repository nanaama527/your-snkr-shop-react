export default (state = [], action)=> {


    switch(action.type){

        case "FETCH_SNEAKERS":
            return [...action.payload]

        case "FETCH_BRAND_SNEAKERS":
            return [...action.payload]


        case "ADD_SNEAKER":
            return [...state, action.payload]


        case "DELETE_SNEAKER":
            let remainingSneakers = state.filter( (sneaker)=> sneaker.id !== action.payload.id )
            return [...remainingSneakers]    

        default: 
            return state

    }


}
