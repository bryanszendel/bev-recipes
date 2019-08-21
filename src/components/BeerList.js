import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getData } from '../actions'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const BeerList = (props) => {
  return (
    <div className="container">
      <div className="header">
        <h1>This is the BeerList.<br />You're Welcome.</h1>
        <Button 
          onClick={props.getData}>
          
          {props.isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            'SHOW ME THE BEERS'
          )}
        </Button>
      </div>
      <div className="beer-container">
        <Card.Group>
        {props.beers &&
          props.beers.map(beer => {
            return (
              <Card key={beer.id} centered={true} raised={true}>
                <Image 
                  size="small" 
                  centered 
                  src={beer.image_url} 
                  style={{maxHeight: '250px', width: 'auto', height: 'auto'}} 
                  alt={beer.name} 
                />
                <Card.Content>
                  <Card.Header>{beer.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{beer.tagline}</span>
                  </Card.Meta>
                  <Card.Meta>
                    <span className='date'>ABV: {beer.abv}%</span>
                  </Card.Meta>
                  <Card.Meta>
                    <span className='date'>IBU: {beer.ibu}</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            )
          })
        }
        </Card.Group>
      </div>
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


