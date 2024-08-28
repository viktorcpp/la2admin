
import React             from "react";
import { NextResponse  } from 'next/server'

import Breadcrumbs from "../../components/Breadcrumbs";
import PageNavbar  from "../../components/PageNavbar";
import excuteQuery from '../../lib/db'

export default function Page({ params, searchParams, }) {

    let sql_result = [];
    const search_id = searchParams['id'];
    const sql_ = `SELECT

        CAST(npc.id AS CHAR) AS mobId,
        npc.name AS mobName,
        npc.level AS mobLevel,
        npc.type AS mobType,
        CAST(npc.hp AS CHAR) AS mobHp,
        CAST(npc.mp AS CHAR) AS mobMp,
        CAST(npc.str AS CHAR) AS mobStr,
        CAST(npc.con AS CHAR) AS mobCon,
        CAST(npc.dex AS CHAR) AS mobDex,
        CAST(npc.int AS CHAR) AS mobInt,
        CAST(npc.wit AS CHAR) AS mobWit,
        CAST(npc.men AS CHAR) AS mobMen,
        CAST(npc.patk AS CHAR) AS mobPAtk,
        CAST(npc.pdef AS CHAR) AS mobPDef,
        CAST(npc.matk AS CHAR) AS mobMAtk,
        CAST(npc.mdef AS CHAR) AS mobMDef,
        
        CAST(droplist.itemId AS CHAR) AS dropItemId,
        CAST(droplist.min AS CHAR) AS dropMin,
        CAST(droplist.max AS CHAR) AS dropMax,
        CAST(droplist.category AS CHAR) AS dropCategory,
        CAST(droplist.chance AS CHAR) AS dropChance

        FROM npc
        LEFT JOIN droplist ON npc.id=droplist.mobId
        WHERE npc.id=${search_id}`;

    async function getData() {
        sql_result = await excuteQuery( sql_ );
    }

    getData();

    return (
        <div className="content__wrap">
            <div className="content__title">Raid Bosses</div>
            <div className="group">
                <Breadcrumbs
                    homeElement={'Home'}
                    separator={<span> | </span>}
                    activeClasses='text-amber-500'
                    containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
                />
            </div>
            <div className="group">
                <PageNavbar/>
            </div>
            <div className="group">
                {
                    ( sql_result || [] ).map( (val_, index_) => {
                        return(
                            <div key={index_}>123</div>
                        )
                    } )
                }
            </div>
        </div>
    )
}
