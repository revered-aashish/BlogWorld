import  "./header.css"
import React from 'react'
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
         
      </div> 
  <img
   className="headerImg"
    src="https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2016/04/Blogging-in-English.jpg"
    alt=""
  />
    </div>
  )
}

export default Header