import React from 'react';

import { connect } from 'react-redux'

import { getData } from '../actions'
import Loader from 'react-loader-spinner'

const BeerList = (props) => {
  return (
    <div>
      <h2>This is the BeerList.<br />You're Welcome.</h2>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          'SHOW ME THE BEERS'
        )}
      </button>
      {props.beers &&
        props.beers.map(beer => {
          return (
            <div key={beer.id}>
              <h4>{beer.name}</h4>
            </div>
        )
      })
    }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(BeerList)