import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./DetailCar.module.css";

const DetailCar = () => {
    const { idCar } = useParams();

    const [dataDetailCar, setDataDetailCar] = useState({});

    const getData = async () => {
        const { data } = await axios(
            `https://rent-cars-api.herokuapp.com/admin/car/${idCar}`
        );
        setDataDetailCar(data);
    };

    useEffect(() => {
        getData();
    });

    return (
        <>
            <div className={styles.detailSection}>
                <div className={styles.detailPacket}>
                    <div className={styles.detailCard}>
                        <h6>Tentang Paket</h6>
                        <p>Include</p>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <p>Exclude</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <h6>Refund, Reschedule, Overtime</h6>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>
                    <div>
                        <button className={`btn btn-success ${styles.btnDetail}`}>Lanjutkan Pembayaran</button>
                    </div>
                </div>
                <div className={styles.cardPrice}>
                    <div className={styles.imgFrame}>
                        <img src={dataDetailCar.image} className={styles.imgProduct} alt="imgProduct" />
                    </div>
                    <div className={styles.detailProduct}>
                        <h6 className={styles.productName}>{dataDetailCar.name}</h6>
                        <ul className={styles.detail}>
                            <li className={styles.detailPoint}>
                                <img className={styles.detailIcon} src="/img/fi_users.svg" alt="cap" />
                                <span>4 orang</span>
                            </li>
                            <li className={styles.detailPoint}>
                                <img className={styles.detailIcon} src="/img/fi_settings.svg" alt="type" />
                                <span>Manual</span>
                            </li>
                            <li className={styles.detailPoint}>
                                <img className={styles.detailIcon} src="/img/fi_calendar.svg" alt="time" />
                                <span>Tahun 2020</span>
                            </li>
                        </ul>
                        <div className={styles.calc}>
                            <p className={styles.tPrice}>Total</p>
                            <p className={styles.nPrice}>Rp {dataDetailCar.price}</p>
                        </div>
                        <button className={`btn btn-success ${styles.btnPrice}`}>Lanjutkan Pembayaran</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCar