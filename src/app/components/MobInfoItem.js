
"use client"

import Link  from "next/link";
import React from "react";

export default function MobInfoItem(props) {

    const items_ = props.list[0].dropList.map( (item, index) => {
        return (
            <div className="mobinfo__item" key={index}>
                <Link href={"/main/item-info?itemid=" + item.itemId} className="mobinfo__dropname">
                    <img src={"/icons/" + item.itemIcon + ".png"} alt="" className="mobinfo__ico" width="32" height="32"/>
                    {item.itemName}
                </Link>
                <span className="mobinfo__minmax">{item.itemMin + "-" + item.itemMax}</span>
                <span className="mobinfo__chance">{ (item.itemChance/10000).toFixed(2) }<sub>%</sub></span>
            </div>
        )
    });

    return (
        <>
            {items_}
        </>
    );
}
