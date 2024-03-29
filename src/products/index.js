import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import SearchIcon from '@material-ui/icons/Search'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import TextField from '@material-ui/core/TextField'
import Product from './Product'

class ProductList extends Component {
  state = {
    products: [],
    searchString: '',
    showResult: false,
    showComponents: true
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
        productName: 'Pauls Farmhouse Gold Organic Milk 1.5l',
        servingSize: '1 glass (200ml) per serving',
        greenhouseGas: '229 Kg',
        petrolCar: '585 km',
        heatingHome: '36 days',
        water: '45,733 litres',
        showers: '703 showers',
        land: '652m²',
        tenisCourts: '2'

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
    this.state.showComponents = true ? event.target.value.length === 0: false;
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
          <div style={{paddingLeft: 24}}>
            <span style={this.state.showComponents ? {display: 'block'}:  { display: 'none' }}>
              <h2 >Choose a climate conscious choice</h2>
              <h4>Search for a food product and see how it affects the environment.</h4>
            </span>
            <SearchIcon style={{paddingTop: 20}}/>
            <TextField style={{}}
                       id="searchInput"
                       placeholder="Search for Products"
                       margin="normal"
                       onChange={this.onSearchInputChange}
            >
            </TextField>
            <span style={this.state.showComponents ? {display: 'block'}:  { display: 'none' }}>
              <h4>Or scan your product to get the details</h4>
              <div>
                <Fab
                  variant="extended"
                  size="medium"
                  color="primary"
                  aria-label="Add"
                  href="#"
                >
                  <PhotoCameraIcon style={{paddingRight: 12}}/>
                  Scan your product
                </Fab>
            </div>
          </span>

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