import { Component } from "react";
import { connect } from 'react-redux'
import Brand from "./Brand";




class Brands extends Component {
    render(){
        const everyBrand = this.props.brandstoMap.map(b => {return(<Brand key={b.id} brandProp={b}/>)})
      return(<>
      {everyBrand}
      </>)
    
    }
  }  
  
  
  
const mapStateToProps =(state)=>{  
    console.log(state)
    return{
        brandstoMap: state.brands
        
    }

}








export default connect(mapStateToProps)(Brands);
  
  
  
  