import React from 'react';
import Button_Carrinho from '../components/Button_Carrinho';
import '../css/product_details.css';

class Product_Details extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state: { prod } } } = this.props;

    this.state = {
      produto: prod,
    };
  }

  render() {
    const { produto: { id, title, price, thumbnail } } = this.state;
    return (
      <div className='container_details'>
        <div className='details' key={id}>
          <p>{title}</p>
          <img src={thumbnail}></img>
          <p>{price}</p>
        </div>       
        <Button_Carrinho />
      </div>
    );
  }
}

export default Product_Details;