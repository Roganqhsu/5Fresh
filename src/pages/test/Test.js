import React from 'react'
import styles from "./Test.module.scss"
const Test = () => {
    return (
        <div>
            <ul class={styles["drop-down-menu"]}>
                <li>
                    <a href="#">關於我們</a>
                    <ul>
                        <li>
                            <a href="#">服務據點</a>
                        </li>
                        <li>
                            <a href="#">服務客戶</a>
                        </li>
                        <li>
                            <a href="#">服務地區</a>
                        </li>
                        <li>
                            <a href="#">徵才資訊</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Magento</a></li>
                <li>
                    <a href="#">服務項目</a>
                    <ul>
                        <li>
                            <a href="#">系統整合</a>
                            <ul>
                                <li>
                                    <a href="#">Magento與POS訂單系統整合</a>
                                </li>
                                <li>
                                    <a href="#">Magento與CRM客戶管理系統整合</a>
                                </li>
                                <li>
                                    <a href="#">Magento與ERP管理系統整合</a>
                                </li>
                                <li>
                                    <a href="#">Magento金流串接服務</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">專業網頁設計</a>
                            <ul>
                                <li>
                                    <a href="#">響應式網頁設計 (Responsive Web Design)</a>
                                </li>
                                <li>
                                    <a href="#">手機網站設計</a>
                                </li>
                                <li>
                                    <a href="#">WordPress 網頁設計</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">網路行銷服務</a>
                            <ul>
                                <li>
                                    <a href="#">Amazon亞馬遜網路商城</a>
                                </li>
                                <li>
                                    <a href="#">社群媒體行銷</a>
                                </li>
                                <li>
                                    <a href="#">SEO 搜尋引擎優化</a>
                                    <ul>
                                        <li>
                                            <a href="#">在地SEO</a>
                                        </li>
                                        <li>
                                            <a href="#">SEO 搜尋引擎優化</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">網站客製開發</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">專案介紹</a>
                </li>
                <li>
                    <a href="#">資訊分享</a>
                </li>
                <li>
                    <a href="#">聯絡我們</a>
                </li>
            </ul>
        </div>
    )
}

export default Test