import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLink=links.map((link,index)=>{
    let fin="#"+link
    return (
      <a key={index} href={fin}>{link}</a>
    )
  })
  console.log(navLink)

  return (<nav>{navLink}</nav>);
}

export default NavBar;
