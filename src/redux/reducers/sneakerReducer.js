export default (state = [], action)=> {


    switch(action.type){

        case "FETCH_SNEAKERS":
            return [...action.payload]

        default: 
            return state

    }


}
