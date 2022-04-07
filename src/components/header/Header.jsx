import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar sticky-top padding-nav">
                    <div className="container">
                        <div className={`${styles.navLogo}`}></div>
                        <div>
                            <ul className="navbar-nav flex-row">
                                <li className="nav-item">
                                    <a className="nav-link" href="#our-services">Our Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#whyus">Why Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonial">Testimonial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faq">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${styles.register}`} href="#register">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <section className={`row ${styles.hero}`}>
                        <div className="col-md-6 col-sm-12 align-self-center">
                            <h1>Sewa & Rental Mobil Terbaik di <br/> kawasan (Lokasimu)</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <img src="img/hero-image.png" class={`${styles.imgHero}`} alt="HeroImg"/>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header