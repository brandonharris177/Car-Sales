import React from 'react';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.features.name} (+{props.features.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car
  }
}

export default connect(mapStateToProps, {})(AdditionalFeature);
