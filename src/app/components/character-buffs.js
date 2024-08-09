
"use client"

import React from "react";

import {useEffect, useState} from "react";
import ButtonLink            from "./button-link";

export default function CharacterBuffs() {

    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {

        async function getPageData() {

            const response = await fetch( '/main/get-characters-list', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            } );
            const res = await response.json();

            setDataResponse(res.charsList);
        }
        getPageData();

    }, []);

    async function HandleLink(charId, obj) {
        console.log(charId);
        if( obj != null )
            obj.current.classList.add('btn-link--loading');

        const response = await fetch( '/main/set-character-buff?charid=' + charId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        } );

        if( obj != null )
            obj.current.classList.remove('btn-link--loading');
    }

    return (
        <div className="charsbuffs">
            <h3>Fullbuffs</h3>
            {
                dataResponse.map((char_, index) => {
                    return (
                        <ButtonLink href={char_.obj_Id} onClick={HandleLink} label={char_.char_name} key={index} />
                    )
                })
            }

            {
                <div className="charsbuffs__item">
                    <ButtonLink href={"all"} onClick={HandleLink} label="&gt;&gt; Fullbuff all &lt;&lt;" />
                </div>
            }
        </div>
    )
}
