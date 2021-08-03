import { Component } from "react";
import Sneaker from "./Sneaker";
import { connect } from 'react-redux'
import { fetchSneakers } from './redux/actions/index.js'




class Sneakers extends Component {
    componentDidMount(){
        this.props.fetchSneakers()

    }
    

    render(){
        const everySneaker = this.props.sneakerstoMap.map(s => {return(<Sneaker key={s.id} sneakerProp={s}/>)})
      return(<>
      {everySneaker}
      </>)
    
    }
  }  
    

  
  const mapStateToProps =(state)=>{  
    console.log(state)
    return{
        sneakerstoMap: state.sneakers
        
    }

}
  
  const mapDispatchToProps =(dispatch)=>{

      
    // return{
    //     fetchSneakers: ()=>{
    //         fetch('http://localhost:3000/sneakers')
    //         .then(resp => resp.json())
    //         .then(sneakers => {  console.log(sneakers)  
            
    //             dispatch({ type: "FETCH_SNEAKERS", payload: sneakers })
            
    //         })
        
    //     }
    // }
    
        
}

//export default connect(mapStateToProps, mapDispatchToProps)(Sneakers);
   
export default connect(mapStateToProps, { fetchSneakers })(Sneakers);
   
  
  
  
  
  
  
  
  
  
  