import React from 'react'

const Header = () => {
  return (
    <div className= "headerSection">
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>

      <div className="center">
        <ul>
          <li>women</li>
          <li>men</li>
          <li>childrens</li>
          <li>bags</li>
        </ul>
      </div>

      <div>
        <div className="search">
          <input type="text" placeholder="search..."/>
        </div>
      </div>
      
      <div className="right">
      <div className="signin">
        signin / signup
        
      </div>
      <div className="cart">
        cart
      </div>
      <div className="buy now">
        buy now
      </div>
      </div>
    
    </div>

  )
}

export default Header