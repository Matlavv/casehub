import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" className="imgDrapeau"/>
          </div>
          <div className="item">
            <span>EUR</span>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Silicones</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Images</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">Personnalisées</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">CASEHUB</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Page d'accueil</Link>
          </div>
          <div className="icons">
          <Link className ="link" to="/login"><PersonOutlineOutlinedIcon/></Link>
            
            {/* <SearchIcon/>
            <FavoriteBorderOutlinedIcon/> */}
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;