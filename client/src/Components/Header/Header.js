import './Header.scss'


const Header = () => {

   
    return (
        <nav className="navbar">
         <h1>eCommerce</h1>
         <ul>
            <li>
               <a href="/">Home</a>
            </li>
            <li className="dropdown">
               <a>Category</a>
               <div className="dropdown_content">
                  <a href="/category/clothes">Clothes</a>
                  <a href="/category/shoes">Shoes</a>
                  <a href="/category/hats">Hats</a>
                  <a href="/category/watches">Watches</a>
               </div>
            </li>
            <li>
               <a href="/contacts">Contacts</a>
            </li>
           
                  <li className="cart_container">
                     
                           <span className="cart_counter"></span>
                       
                     
                     <a href="/cart" className="user">Cart</a>
                  </li>
                  <li className="profile_container">
                    
                           <span className="favItems_counter"></span>
                        
                   
                     <a href="/profile" className="user">Profile</a>
                  </li>
                  <li>
                     <a href="/logout" className="user" >Logout</a>
                  </li>
              
               
              <li className="signIn"><a href="/login">Sign in</a></li>
           
         </ul>
      </nav>
   );
}




export default Header;