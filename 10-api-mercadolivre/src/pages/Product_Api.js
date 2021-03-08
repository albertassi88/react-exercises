import React from 'react';
import Loading from '../components/Loading';
import ShoppingCart from '../shopping-cart.png';
import { Link } from 'react-router-dom'; 
import * as LocalStorage from '../services/LocalStorage';
import '../css/product_api.css';
import '../css/shopping-cart.css';

class Product_Api extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state: { produto } } } = this.props;    
   
    this.state = {
      produtos: [],
      nome: produto,
      loading: 'Carregando',      
    };   
  }
  
  componentDidMount() { 
    const { nome } = this.state;       
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${nome}`)
      .then(produto => {
      produto.json()
      .then((data) => this.setState({
        produtos: data.results,
        loading: '',
      }))        
    });    
  }

  render() {
  const { produtos, loading } = this.state;       
    return (
      <div>
        <div className='container-cart'>
          <Link to='/shoppingcart'>
            <img src={ ShoppingCart } className='shopping-cart-icon' alt='icon cart' />                     
          </Link>
        </div>
        {loading ? <Loading /> :
          <ul>
            {produtos.map(prod => 
              <div className='container_api'>
                <li>
                    <Link to="/shoppingcart">
                      <img src={prod.thumbnail}></img>                    
                    </Link>
                    <p>{prod.title}</p>
                    <p>{`R$ ${prod.price}`}</p> 
                    <Link>
                      <button onClick={ () => LocalStorage.addToCart(prod)} className='btn'>Adicionar ao carrinho</button>                    
                    </Link>                    
                </li>                
              </div>
            )}
          </ul>   
        }       
      </div>
    );
  }
}

export default Product_Api;
