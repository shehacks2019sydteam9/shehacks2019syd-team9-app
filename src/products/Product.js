import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Product = (props) => {
  console.log(props) // TODO temp debug code
  const productUrl = `/product/${props.item.id}`;
  console.log(productUrl)

  return(
    <div>
      { props.item ? (
        <Card >
          <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                     image={props.item.imageUrl}
                     title={props.item.productName}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.item.productName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={productUrl}>
              Go to product
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  )
}

export default Product