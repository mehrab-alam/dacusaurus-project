import React from "react"
import styles from './styles/DazkoPricing.module.css'
import { Carousel, Button, Image, Tabs } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, RightOutlined } from "@ant-design/icons";

const DazkoPricing = () => {
    const pricingDetail = [{
        plans: "BASIC PLAN",
        price: "49",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    },
    {
        plans: "BEGINNER PLAN",
        price: "79",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    }, {
        plans: "PREMIUM PLAN",
        price: "109",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    }, {
        plans: "ULTIMATE PLAN",
        price: "149",
        training: ["Personal Trainer",
            "Convienient Time",
            "Special Class",
            "Group Traning",
            "Free Fitness Traning"],

    },]

    const features = [
        {
            img: "../..//img/dazko-img/001-fitness.svg",
            head: "THOUSANDS OF EQUIPMENTS",
            para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. "
        },
        {
            img: "../..//img/dazko-img/002-treadmill.svg",
            head: "OPEN 24/7 DAZKO GYM FITNESS",
            para: "A small river named Duden flows by their place and supplies it with the necessary regelialia."

        },
        {
            img: "../..//img/dazko-img/003-vip-card.svg",
            head: " FOOD SUPPLEMENTS",
            para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.."

        },
    ]
    return (
        <section className={styles.pricingSection}>
            <h4>OUR PRICING</h4>
            <h1>PRICING & <span>PACKAGES</span></h1>
            <div className={styles.priceingDetailes}>
                {pricingDetail.map((price, i) => {
                    return (
                        <div>
                            <h4>{price.plans} </h4>
                            <h2><span>$</span>{price.price}</h2>
                            {price.training.map((train, i) => {
                                return (
                                    <div key={i} className={styles.trainingDetails}>
                                        <span> <RightOutlined /> </span>   {train}
                                    </div>
                                )
                            })}
                            <Button>GET STARTED</Button>
                        </div>
                    )
                })}

            </div>
            <div className={styles.featureContainer}>
                {features.map((feature, i) => {
                    return (
                        <div className={styles.features} key={i}>

                            <h2><span><img src={feature.img} alt="" /></span>{feature.head} </h2>
                            <p>{feature.para} </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default DazkoPricing