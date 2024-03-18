import React from 'react'
import './Style.css';
import homebg from './Images/homebg.png';
import dining from './Images/dining.png';
import living from './Images/living.png';
import bedroom from './Images/bedroom.png';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import footer from './Images/footer.png';
const Home = () => {
  return (
    <>
       {/* <div> */}
       <img src={homebg} alt="homebg" id="homebg"></img>
       {/* </div> */}
       <div class="homediv">
        <p id="p1">New Arrival</p>
        <p id="p2">Discover Our<br></br>New collection</p>
        <p id="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br></br>elit tellus, luctus nec ullamcorper mattis.</p>
        <button id="btnhome">BUY NOW</button>
       </div>
       <div>
        <h1 align="center">Browie The Range</h1>
        <p align="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          <li><img src={dining} alt="dining"></img></li>
          <li><img src={living} alt="living"></img></li>
          <li><img src={bedroom} alt="bedroom"></img></li>
        </ul>
        <div class="imgtext">
        <ul>
          <li>Diving</li>
          <li>Living</li>
          <li>Bedroom</li>
        </ul>
        </div>
       </div>
       <h1 align="center">Our products</h1> 
       <table border="0" width="100%">
       <tr>
                <td><img src={img1} alt="img1"></img></td>
                <td><img src={img2} alt="img2"></img></td>
                <td><img src={img3} alt="img3"></img></td>
                <td><img src={img4} alt="img4"></img></td>
            </tr> 
            <tr>
                <td><img src={img1} alt="img1"></img></td>
                <td><img src={img2} alt="img2"></img></td>
                <td><img src={img3} alt="img3"></img></td>
                <td><img src={img4} alt="img4"></img></td>
            </tr> 
          </table>
       <div>
            <img src={footer} alt="footer"></img>
        </div>
    </>
  )
}

export default Home
