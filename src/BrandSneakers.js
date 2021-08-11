import { Component } from "react";
import Sneaker from "./Sneaker";
import { connect } from 'react-redux'
import { fetchBrandSneakers } from './redux/actions/index.js'




class BrandSneakers extends Component {
    componentDidMount(){
        this.props.fetchBrandSneakers(this.props.brandID)

    }
    

    render(){
      console.log(this.props.brandID)
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
  
  
  
export default connect(mapStateToProps, { fetchBrandSneakers })(BrandSneakers);
   
  
  
  
  
  
  
  
  
  
  

