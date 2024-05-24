import 'boxicons'
import './styles/footer.css'


export default function Footer(){



    return(
        <>
            <div className="footer_box">
                <div className="left_box">
                    <div className="top_left_box">
                        <a>About us</a>
                        <a>Policy</a>
                        <a>Contacts</a>
                        <a>Blog</a>
                        <a>Support</a>
                    </div>
                    <div className="bottom_left_box">
                        <h2>Buy Car</h2>
                        <h3>Copyright <box-icon name='copyright' ></box-icon></h3>
                    </div>
                </div>
                <div className="right_box">
                    <div className="top_right_box">
                        <div>
                            <box-icon  name='instagram' type='logo' ></box-icon>
                        </div>
                        <box-icon  name='facebook' type='logo' ></box-icon>
                        <box-icon  name='whatsapp' type='logo' ></box-icon>
                        <box-icon  name='telegram' type='logo' ></box-icon>
                    </div>
                    <div className="bottom_right_box">
                        <h3>Almaty 2024</h3>
                    </div>
                </div>
            </div>
        </>
    )
}