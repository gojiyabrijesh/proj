import React from 'react'
import shopbg from './Images/shopbg.png';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import pop from './Images/pop.png';
import strip from './Images/strip.png';
import g1 from './Images/g1.png';
import g2 from './Images/g2.png';
import g3 from './Images/g3.png';
import g4 from './Images/g4.png';
import fm from './Images/fm1.png';
import footer from './Images/footer.png';

const Shop = () => {
  return (
    <>
        <div>
            <img src={shopbg} alt="shopbg" class="shopbg"></img>
            <div class="shoptext">
            <h1>Shop</h1>
            <p><b>Home &gt; </b>Shop</p>
            </div>
        </div>
        <div class="stripshop">
            <img src={strip} alt=""></img>
        </div>
        <div class="popup">
            <img src={pop} alt="pop" id="pop"></img>
        </div>
        <table border="0" width="100%" >
            <tr>
                <td><img src={img1} alt="img1" class="popout"></img></td>
                <td><img src={img2} alt="img2" class="popout"></img></td>
                <td><img src={img3} alt="img3" class="popout"></img></td>
                <td><img src={img4} alt="img4" class="popout"></img></td>
            </tr> 
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
            <tr>
                <td><img src={img1} alt="img1"></img></td>
                <td><img src={img2} alt="img2"></img></td>
                <td><img src={img3} alt="img3"></img></td>
                <td><img src={img4} alt="img4"></img></td>
            </tr>            
        </table>
        <div class="box">
            <ul>
                <li><img src={g1} alt ="one" class="shopline"></img></li>
                <li><img src={g2} alt ="two" class="shopline"></img></li>
                <li><img src={g3} alt ="three" class="shopline"></img></li>
                <li><img src={g4} alt ="next" id="next"></img></li>
            </ul>
        </div>
        <p id="one">1</p>
        <div>
            <img src={fm} alt="fm"></img>
        </div>
        <div>
            <img src={footer} alt="footer"></img>
        </div>
    </>
  )
}

export default Shop
