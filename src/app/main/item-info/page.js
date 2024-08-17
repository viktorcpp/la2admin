
"use client"

import React                from 'react';
import {useEffect,useState} from "react";
import {useSearchParams}    from "next/navigation";

export default function PageItemInfo() {

    const [dataResponse, setDataResponse] = useState([]);
    const itemId = useSearchParams().get("itemid");

    function FormatCurr( val_ ) {
        let str_ = parseFloat(val_).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replaceAll(',','.');
            str_ = str_.substring( 1, str_.lastIndexOf('.') );

        let class_name = "price_color_0";
        if( str_.length >= 5 )
        {
            class_name = "price_color_" + str_.length;
        }
        return (
            <span className={class_name}>
            {str_}
            </span>
        );
    }

    useEffect(() => {

        async function getPageData() {

            const response = await fetch( '/main/get-item-data?itemid=' + itemId, {
                method: "GET",
                headers: { "Content-Type": "application/json", },
            } );
            const res = await response.json();

            setDataResponse( res.itemInfo );
        }

        getPageData();

    }, []);

    return (
        <div className="item_info">
            {
                dataResponse.map( (it, index) => {
                    return (
                        <div key={index}>
                            <div className="item_info__name">
                                <img src={"/icons/" + it.iconName + ".png"} alt="" className="item_info__ico" width="32" height="32"/>
                                {it.itemName}
                            </div>

                            <table className="item_info__table">
                            <thead>
                            <tr>
                                {it.pDam.length >     0 ? <th>PAtk.</th> : ""}
                                {it.mDam.length >     0 ? <th>MAtk.</th> : ""}
                                {it.pDef.length >     0 ? <th>PDef.</th> : ""}
                                {it.mDef.length >     0 ? <th>MDef.</th> : ""}
                                {it.shieldDef >       0 ? <th>Shield Def</th> : ""}
                                {it.shieldDefRate >   0 ? <th>Def Rate</th> : ""}
                                {it.atkSpeed.length > 0 ? <th>Atk. Speed</th> : ""}
                                {it.mpBonus.length >  0 ? <th>MP Bonus</th> : ""}
                                {it.mpConsume >       0 ? <th>MP Consume</th> : ""}
                                {it.soulCount >       0 ? <th>Soulshot Use</th> : ""}
                                {it.spirCount >       0 ? <th>Spiritshot Use</th> : ""}
                                {it.critValue >       0 ? <th>Crit.</th> : ""}
                                <th>Weight</th>
                                <th>Cry</th>
                                <th>Cry Count</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {it.pDam.length >     0 ? <td>{it.pDam}</td> : ""}
                                {it.mDam.length >     0 ? <td>{it.mDam}</td> : ""}
                                {it.pDef.length >     0 ? <td>{it.pDef}</td> : ""}
                                {it.mDef.length >     0 ? <td>{it.mDef}</td> : ""}
                                {it.shieldDef >       0 ? <td>{it.shieldDef}</td> : ""}
                                {it.shieldDefRate >   0 ? <td>{it.shieldDefRate}</td> : ""}
                                {it.atkSpeed.length > 0 ? <td>{it.atkSpeed}</td> : ""}
                                {it.mpBonus.length >  0 ? <td>{it.mpBonus}</td> : ""}
                                {it.mpConsume >       0 ? <td>{it.mpConsume}</td> : ""}
                                {it.soulCount >       0 ? <td>{it.soulCount}</td> : ""}
                                {it.spirCount >       0 ? <td>{it.spirCount}</td> : ""}
                                {it.critValue >       0 ? <td>{it.critValue}</td> : ""}
                                <td>{it.itemWeight}</td>
                                <td>{it.crystalType.toUpperCase()}</td>
                                <td>{it.crystalCount}</td>
                                <td>{FormatCurr( it.price ) }</td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}
