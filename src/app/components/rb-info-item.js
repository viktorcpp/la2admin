
import Link  from "next/link";
import React from "react";
import Image from "next/image";

export default function RBInfoItem(props) {
    const items_ = props.list.map((item, index) => {
        return (
            <div className="rbinfo__item" key={index}>
                <Link href={"#" + item.itemId} className="rbinfo__dropname">
                    <img src={"/icons/" + item.iconName + ".png"} alt="" className="rbinfo__ico" width="32" height="32"/>
                    {item.itemName}
                </Link>
                <span className="rbinfo__minmax">{item.dropMin + " - " + item.dropMax}</span>
                <span className="rbinfo__chance">{ (item.chance/10000).toFixed(2) }<sub>%</sub></span>
            </div>
        )
    });

    return (
        <>
            {items_}
        </>
    );
}
