import React from 'react';

class CartWidget extends React.Component {
  constructor(props) {
    super(props);
    
  };

  render() {
    return (
      <div>
      <i className="material-icons cyan-text text-darken-4">shopping_cart </i>
      </div>
    )
  };
}

export default CartWidget;
