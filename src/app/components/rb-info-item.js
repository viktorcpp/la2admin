import Link from "next/link";
import React from "react";

export default function RBInfoItem(props) {
    const items_ = props.list.map((item) => {
        return (
            <div className="rbinfo__item" key={item.itemId}>
                <Link href={"#" + item.itemId} className="rbinfo__dropname">{item.itemName}</Link>
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
