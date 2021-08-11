import BrandSneakers from "./BrandSneakers"
import { connect } from "react-redux"
import { fetchBrandSneakers } from "./redux/actions/index.js"


function Brand(props) {

     console.log(props)

     let beenClicked = false

     const clickHandler = () =>{console.log(props.brandProp.name) 
          beenClicked = !beenClicked
          console.log(beenClicked)
          props.toggleState(props.brandProp.id)
          // iWasClicked()
     }

     const iWasClicked = () =>{
          console.log("IWC")
          // props.toggleState()
          if (beenClicked === true){
               console.log(beenClicked)
               console.log("Hey, I was clicked!")
               return (
                   <h1>Hey</h1> 
                    // <BrandSneakers/>
               )
               
          }
     //      else {
     //           console.log("I was un-clicked..")  
     //      }
     }


     return (<div> 
         <h2 onClick={clickHandler}>{props.brandProp.name}</h2>
         {/* {iWasClicked()} */}
         {/* <button className="outline-secondary">Pick Me to see my shoes!</button> */}
      
    </div>);

  }
  




  export default connect(null, { fetchBrandSneakers })(Brand);
