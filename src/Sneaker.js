import { connect } from 'react-redux'
import { deleteSneaker } from './redux/actions';



function Sneaker(props) {
  const clickHandler =(e)=> {console.log (props.sneakerProp)
    console.log(props)
    props.deleteSneaker(props.sneakerProp)
  }
    return (<div> 
        <h4>{props.sneakerProp.name}</h4>
      <img src={props.sneakerProp.image} alt=""/>
      <button onClick={clickHandler}>Delete this</button>

    </div>);

  }
  


  export default connect(null, { deleteSneaker })(Sneaker);