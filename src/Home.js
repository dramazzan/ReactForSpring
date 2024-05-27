import NavBar from "./NavBar";
import porcheImage from './styles/images/porche_preview.png'

import Footer from "./Footer";
import {Link} from "react-router-dom";
import './styles/home.css'
import BrandList from "./BrandList";

export default function Home(){
    return (
        <>
            <div className="homebody">

                <NavBar/>
                <div className="container">

                    <div className="previewBox">
                        <div className="preview_data">
                            <div className="preview_title">
                                Discover Your Dream Car
                            </div>
                            <div className="preview_text">
                                Explore our extensive collection of new and pre-owned vehicles. Find the perfect car
                                that fits your style and budget.
                            </div>
                        </div>
                        <img src={porcheImage} alt="image"/>
                    </div>
                </div>
                <div className="recomended_box">
                    <h2>Recomended Cars</h2>
                    <BrandList/>
                </div>
                <div className="intermediate_box">
                    <div className="retro_box">
                        <div className="left_retro_box">
                            <h2>Timeless Classics for Sale</h2>
                            <p>Discover the charm and elegance of yesteryears with our handpicked selection of classic
                                cars. Each vehicle is a testament to timeless design and meticulous craftsmanship.
                                Whether you’re a collector or an enthusiast, find the perfect piece of automotive
                                history to add to your garage. Experience the nostalgia and unmatched style of our
                                vintage cars today.</p>
                        </div>
                        <div className="right_retro_box">
                            <Link to="/cars">Retro Cars</Link>
                        </div>
                    </div>

                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}