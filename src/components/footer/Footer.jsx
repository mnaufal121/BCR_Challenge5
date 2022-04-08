import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={`${styles.addresFooter}`}>
                    <p>Jalan Suroyo No. 161 Mayangan Kota <br/> Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className={`${styles.contentFooter}`}>
                    <p>Our services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className={`${styles.sosmedFooter}`}>
                    <p>Connect with us</p>
                    <div className={`${styles.sosmedList}`}>
                        <img src="/img/icon_facebook.svg" alt="fb" />
                        <img src="/img/icon_instagram.svg" alt="ig" />
                        <img src="/img/icon_twitter.svg" alt="tr" />
                        <img src="/img/icon_mail.svg" alt="ma" />
                        <img src="/img/icon_twitch.svg" alt="th" />
                    </div>
                </div>
                <div className={`${styles.copyFooter}`}>
                    <p>Copyright Binar 2022</p>
                    <div className={`${styles.logoFooter}`}></div>
                </div>
            </footer>
        </>
    )
}

export default Footer