import "./App.css";
import Luna from "./images/lunabase.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="display">
                <div className="img-footer">
                    <h5>Made by</h5>
                    <img src={Luna} alt='akdkd' />

                </div>

                <div>
                    <p>
                        <span>LUNA BASE-</span>Is a software development company. That specialise in building SaaS apps from start to finish for customers across Nigeria, Africa and Europe.
                    </p>
                </div>
            </div>
            
            <div className="display">
                
                <div className="fot">
                   
                    <ul>
                        <h6>Social Link</h6>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div >
                    
                    <ul>
                        <h6>Useful Link</h6>
                        <li>Help center</li>
                        <li>Blog</li>
                        <li>Customer Stories</li>
                        <li>Our policy</li>
                        <li>Terms of Service</li>
                        <li>Affilate Program</li>
                    </ul>
                </div>
            </div>
        </div>
      );
}
 
export default Footer;