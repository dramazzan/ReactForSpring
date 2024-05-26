import 'boxicons'
import './styles/footer.css'
import 'boxicons/css/boxicons.min.css';
import { bxCopyright } from 'boxicons';
import {Link} from "react-router-dom";



export default function Footer(){



    return(
        <>
            <div className="footer_box">
                <div className="left_box">
                    <div className="top_left_box">
                        <Link>About us</Link>
                        <Link>Policy</Link>
                        <Link>Contacts</Link>
                        <Link>Blog</Link>
                        <Link>Support</Link>
                    </div>
                    <div className="bottom_left_box">
                        <h2>Buy Car</h2>
                        <h3>Copyright <i className={ bxCopyright }></i></h3>
                    </div>
                </div>
                <div className="right_box">
                    <div className="top_right_box">
                        <div>
                            <i className='bx bxl-instagram'></i>
                            <i className='bx bxl-facebook'></i>
                            <i className='bx bxl-whatsapp'></i>
                            <i className='bx bxl-telegram'></i>
                        </div>

                    </div>
                    <div className="bottom_right_box">
                        <h3>Almaty 2024</h3>
                    </div>
                </div>
            </div>
        </>
    )
}