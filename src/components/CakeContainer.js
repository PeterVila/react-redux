import React from 'react'
import { connect } from 'react-redux';
import { buyCake, sellCake } from '../redux'; //Action

function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.sellCake}>Sell Cake</button>
    </div>
  );
}

const mapStateToProps = state => { //State mapped to our component props
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps =  dispatch  => { //Map our dispatch action create to a prop in our component
  return {
    buyCake:  () => dispatch(buyCake()),
    sellCake: () => dispatch(sellCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer) //Does with the two functions specify,
