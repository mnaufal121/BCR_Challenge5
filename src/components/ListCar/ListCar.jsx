import styles from './ListCar.module.css';
import { Link } from 'react-router-dom';

const ListCar = ({ listCar }) => {

    const formatMoney = (money) => {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <>
            {listCar.map((data) => {
                return (
                    <div key={data.id} className={`${styles.cardCars}`}>
                        <div className={styles.imgFrame}>
                            <img className={styles.imgCar} src={data.image} alt="imgCar" />
                        </div>
                        <p className={styles.product}>{data.name}</p>
                        <h6>Rp {formatMoney(data.price)} / hari</h6>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <ul className={`list-group ${styles.detailGroup}`}>
                            <li className={`list-group-item d-flex align-items-center ${styles.detail}`}>
                                <img src="img/fi_users.svg" alt="cap" />
                                <span>4 orang</span>
                            </li>
                            <li className={`list-group-item d-flex align-items-center ${styles.detail}`}>
                                <img src="img/fi_settings.svg" alt="type" />
                                <span>Manual</span>
                            </li>
                            <li className={`list-group-item d-flex align-items-center ${styles.detail}`}>
                                <img src="img/fi_calendar.svg" alt="time" />
                                <span>Tahun 2020</span>
                            </li>
                        </ul>
                        <Link to={`/detail/${data.id}`}>
                            <button className={`btn btn-success ${styles.btnDetail}`}>Pilih Mobil</button>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}

export default ListCar