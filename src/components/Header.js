import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center" style={{backgroundColor:'#edc842'}}>
      <div className="Head-title">
      <i class="fas fa-shopping-basket" style={{fontSize:'600%'}}></i>
        <a href="#/" style={{color:'black'}}>
          <h1>Hello, Basket Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart" style={{color:'black'}}>
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin" style={{color:'black', margin:'20px'}}> SignIn</a>
      </div>
    </header>
  );
}
