function Brand(props) {
     
     const n = () =>{console.log(props.brandProp.name)}
     return (<div> 
         <h2 onClick={n}>{props.brandProp.name}</h2>

    </div>);

  }
  




  export default Brand;
