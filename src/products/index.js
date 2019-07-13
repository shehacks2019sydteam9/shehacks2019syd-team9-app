import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Product from './Product'

class ProductList extends Component {
  state = {
    products: [],
    searchString: ''
  };

  constructor() {
    super()
  }

  getProducts = () => {
    // TODO API call for products search

    const products = [
      {
        id: 1,
        imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/medium/667988.jpg',
        productName: 'Pauls Farmhouse Gold Organic Milk 1.5l'
      },
      {
        id: 2,
        imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/medium/405010.jpg',
        productName: 'Pauls Farmhouse Gold Milk 1.5l'
      }
    ];

    this.setState({ products });
  };

  onSearchInputChange = (event) => {
    console.log("Search changed ..." + event.target.value)
    if (event.target.value) {
      this.setState({searchString: event.target.value})
    } else {
      this.setState({searchString: ''})
    }
    this.getProducts()
  };

  render() {
    return (
      <div>
        { this.state.products ? (
          <div>
            <TextField style={{padding: 24}}
                       id="searchInput"
                       placeholder="Search for Products"
                       margin="normal"
                       onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{padding: 24}}>
              { this.state.products.map(currentProduct => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Product item={currentProduct} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No match product found" }
      </div>
    )
  }
}

export default ProductList