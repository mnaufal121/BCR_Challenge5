import styles from './Filterbox.module.css';
import ListCar from '../ListCar/ListCar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar } from '../redux/action/carAction';

const Filterbox = () => {
    const dispatch = useDispatch();
    const { carData } = useSelector((globalStore) => globalStore.carReducer);

    return (
        <>
            <section className={`${styles.filterBox}`} id="filterbox">
                <form>
                    <div className={`${styles.filter}`}>
                        <label htmlFor="type">Tipe Driver</label>
                        <select defaultValue="default" name="type" id="typeDriver">
                            <option disabled value="default">Pilih Tipe Driver</option>
                            <option value="Dengan Sopir">Dengan Sopir</option>
                            <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className={`${styles.filter}`}>
                        <label htmlFor="date">Tanggal</label>
                        <input id="date" type="date" name="date" defaultValue />
                    </div>
                    <div className={`${styles.filter}`}>
                        <label htmlFor="time">Waktu Jemput/Ambil</label>
                        <input type="time" name="time" id="time" defaultValue />
                    </div>
                    <div className={`${styles.filter}`}>
                        <label htmlFor="capacity">Jumlah Penumpang (optional)</label>
                        <input type="number" name="capacity" id="capacity" placeholder="Jumlah Penumpang (optional)" />
                    </div>
                    <div className={`${styles.searchSection}`}>
                        <button onClick={(event) => dispatch(fetchCar())} type="submit" className={`btn btn-success ${styles.searchBtn}`}>Cari Mobil</button>
                    </div>
                </form>
            </section>
            <div className={styles.listCar}>
                {carData.length > 0 && <ListCar carData={carData} />}
            </div>
        </>
    )
}

export default Filterbox