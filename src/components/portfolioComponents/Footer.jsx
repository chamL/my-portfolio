import React, { useState } from 'react';

import gitHub from '../../assets/image/github.png'
import linkedin from '../../assets/image/linkedin.png'
import mail from '../../assets/image/apple.png'
import phone from '../../assets/image/telephone-symbol-button.png'




function Footer() {

    const phoneNumber = '4548555';
    const eMail = 'Lamin-cham@hotmail.com'
    const gitHubUser = 'ChamL'
    const linkedIn = 'Lamin cham (not yet)'


    const [visableSosial, setVisableSosial] = useState(null);
    const handleButtonClick = (paragraphId) => {
        setVisableSosial(paragraphId)
    }

    return (

        <footer className='portfolio_footer'>

            <div className="footer_banner"><h1>Footer...</h1></div>
            <div className="footer_section">
                <div className="footer_top">
                    <h1>Get in contact
                    </h1>

                </div>


                <div className="footer_middle">
                    <p>I'm currently studying at Høyskolen Kristiania
                        in Bergen and eager to pursue part-time opportunities
                        in web development or related fields. If you see
                        potential for collaboration, feel free to reach out.
                        Let's explore how we can work together.
                    </p>
                    <p >Let's stay connected! Whether you have questions,
                        want to discuss projects, or simply connect
                        professionally, I'm just a click away. Reach out
                        via email or phone, connect with me on LinkedIn for
                        professional updates, or explore my projects on
                        GitHub. Looking forward to connecting with you!
                    </p>

                </div>
                <div className="footer_sosial">
                    <div className='footer_btn'>
                        <button onClick={() => handleButtonClick(1)} id='phone'><img src={phone} alt="" /></button>
                        <button onClick={() => handleButtonClick(2)} id='mail'><img src={mail} alt="" /></button>
                        <button onClick={() => handleButtonClick(3)} id='github'><img src={gitHub} alt="" /></button>
                        <button onClick={() => handleButtonClick(4)} id='linkedin'><img src={linkedin} alt="" /></button>
                    </div>
                    <div className="footer_display_div">
                        <div className="footer_display">
                            {visableSosial === 1 && <p id='phone'>Phone Number: 45485545</p>}
                            {visableSosial === 2 && <p id='mail'>E-Mail: Lamin-cham@hotmail.com</p>}
                            {visableSosial === 3 && <p id='github'>Github: ChamL</p>}
                            {visableSosial === 4 && <p id='linkedin'>Linkedin: lamin Cham</p>}

                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p> <span>&copy;</span> 2024 Lamin Cham. All rights reserved.</p>
                    <hr />
                </div>
            </div>

        </footer>
    );

}






export default Footer;