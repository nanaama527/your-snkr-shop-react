import { Component } from "react";
import { connect } from 'react-redux'
import Brand from "./Brand";
import BrandSneakers from "./BrandSneakers";



class Brands extends Component {

  constructor(){ super();
        
    this.state={ beenClicked: false, brandID: 0 }

  } 

    brandsClickHandler = (idForBrand) =>{ 
      this.setState({ beenClicked:!this.state.beenClicked,
        brandID: idForBrand
      })
    }
    

    iWasClicked = () =>{

      if (this.state.beenClicked === true){
           console.log("Hey, I was clicked!")
           console.log(this.state.brandID)
           return (
              //  <h1>Hey</h1> 
             <BrandSneakers brandID={this.state.brandID}/>
           )
           
      }
      else {
           console.log("I was un-clicked..")  
      }
 }



    render(){
        console.log(this.state)
        const everyBrand = this.props.brandstoMap.map(b => {return(<>
        {/* <h1 onClick={this.brandsClickHandler}>shwooop!</h1> */}
        <Brand key={b.id} brandProp={b} toggleState={this.brandsClickHandler} />
        </>)})
      return(<>
      {everyBrand}
      {this.iWasClicked()}
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
  
  
  
  