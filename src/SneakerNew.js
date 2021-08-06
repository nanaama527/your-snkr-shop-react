import { Component } from "react"
import { connect } from 'react-redux'  
import { createNEWSneaker } from './redux/actions/index.js'
   
class SneakerNew extends Component{


    constructor(){ super();
        
        this.state={ name: "", image: "", brand_id: "" }

    }
    

    submitHandler=(e)=>{ e.preventDefault()

        console.log("Name:", this.state.name)
        console.log("image:", this.state.image)
        console.log("brand_id:", this.state.brand_id)  
        this.props.createNEWSneaker( this.state )
    }

    onChangeHandler=(e)=>{ 

        console.log(e.target.name, "  ::  ", e.target.value)    
        this.setState({ [e.target.name]: e.target.value })
    }
    
    

    render(){  
        return(<>
        <div>
            <h1>New Sneaker</h1>
            
            <form onSubmit={this.submitHandler}>

                <input type="text" placeholder="Name" 
                    value={this.state.name} onChange={this.onChangeHandler}
                    name="name"
                />
                <input type="text" placeholder="image" 
                    value={this.state.image} onChange={this.onChangeHandler}
                    name="image"
                />                              
                <input type="submit" 
                    value="Add New Sneaker!"/>
            </form>

            <label for="brand">Choose a brand:</label>

                <select name="brand_id" id="brand" onChange={this.onChangeHandler}>
                    <option value="1">Nike-hypebeast</option>
                    <option value="2">Nike-Michigan</option>
                    <option value="3">Adidas</option>
                    <option value="4">Jordan</option>
                    <option value="5">New Balance</option>
                    <option value="6">Puma</option>
                </select> 
        </div>

    </>);}

}


export default connect(null, { createNEWSneaker })(SneakerNew);  
