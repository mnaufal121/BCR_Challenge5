import styles from './Filterbox.module.css';

const Filterbox = () => {
    return (
        <>
            <section className={`${styles.filterBox}`} id="filterbox">
                <form>
                    <div className={`${styles.filter}`}>
                        <label for="type">Tipe Driver</label>
                        <select name="type" id="typeDriver">
                            <option value="" selected disabled hidden>Pilih Tipe Driver</option>
                            <option value="Dengan Sopir">Dengan Sopir</option>
                            <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className={`${styles.filter}`}>
                        <label for="date">Tanggal</label>
                        <input id="date" type="date" name="date" value />
                    </div>
                    <div className={`${styles.filter}`}>
                        <label for="time">Waktu Jemput/Ambil</label>
                        <input type="time" name="time" id="time" value />
                    </div>
                    <div className={`${styles.filter}`}>
                        <label for="capacity">Jumlah Penumpang (optional)</label>
                        <input type="number" name="capacity" id="capacity" placeholder="Jumlah Penumpang (optional)" />
                    </div>
                    <div className={`${styles.searchSection}`}>
                        <button type="submit" className={`btn btn-success ${styles.searchBtn}`}>Cari Mobil</button>
                    </div>
                </form>
            </section>
            <section id="main">
                <div className="resSearch"></div>
            </section>
        </>
    )
}

export default Filterbox