import React, { Component } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { Redirect } from 'react-router';


class ProductInfo extends Component {
  state = {
    productID: this.props.match.params,
    product: {},
    redirect: false
  };

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.getProduct();
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  getProduct = () => {
    const products = [
      {
        id: 1,
        imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/medium/667988.jpg',
        productName: 'Pauls Farmhouse Gold Organic Milk 1.5l',
        productDescription: 'Farmhouse Gold Organic is wholesome milk made on Australian farms free from synthetic fertilisers, pesticides  and herbicides. Extra creamy Farmhouse Gold Organic Milk has a smooth, creamy taste you will savour and is 100% certified organic.',
      },
      {
        id: 2,
        imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/medium/405010.jpg',
        productName: 'Pauls Farmhouse Gold Organic Milk 1.5l',
        productDescription: 'Farmhouse Gold Organic is wholesome milk made on Australian farms free from synthetic fertilisers, pesticides  and herbicides. Extra creamy Farmhouse Gold Organic Milk has a smooth, creamy taste you will savour and is 100% certified organic.',
      }
    ];
    this.setState({ product: products.filter(product =>product.id===parseInt(this.state.productID.id))[0]});
  };
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/info" />;
    }
    return (
      <div>
        <div style={{display: 'inline-block' , width: '88%', float: 'left'}}>
          <Card>
            <Typography gutterBottom variant="headline" component="h2"
            style={{padding: '5%'}}
            >
                {this.state.product.productName}
              </Typography>

            <CardMedia style={{height: 0, paddingTop: '100%'}}
                        image={this.state.product.imageUrl}
                        title={this.state.product.productName}
            />
            <Typography gutterBottom component="p"
            style={{padding: '7%', textAlign: 'center'}}>
              {this.state.product.productDescription}
            </Typography>
          </Card>
        </div>
        <div style={{display: 'inline-block', height: '100%'}}>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Add"
            href="#"
            style={{marginTop: 350, borderRadius: '100%', width: 40}}
            onClick={this.handleOnClick}
          >
            <PlayArrowIcon/>
          </Fab>
        </div>
      </div>
    )
  }
}

export default ProductInfo