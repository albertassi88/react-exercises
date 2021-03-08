export const saveCart = (cart) => {
  if (!cart) cart = [];
  localStorage.setItem('produtos', JSON.stringify(cart));
};

export const readCart = () => JSON.parse(localStorage.getItem('produtos'));

export const addToCart = (product) => {  
  let cart = readCart();
  if (!cart) cart = [];

  const { id, title, price, thumbnail } = product;
  const item = {
    id,
    title,
    price,
    thumbnail,
    amount: 1,   
  };

  let unique = false;
  cart.forEach((cartItem) => {
    if (item.id === cartItem.id) {
      cartItem.amount += 1;
      unique = true;
    }
  });

  if (!unique) cart.push(item);
  saveCart(cart);
};
