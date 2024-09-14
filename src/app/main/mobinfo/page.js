
"use client"

import React, {useEffect, useState} from "react";
import { NextResponse  }   from 'next/server'
import { useSearchParams } from "next/navigation";

import Breadcrumbs from "../../components/Breadcrumbs";
import PageNavbar  from "../../components/PageNavbar";
import MobInfoItem from "../../components/MobInfoItem";
import MobInfoLoc  from "../../components/MobInfoLoc";

export default function MobInfo() {

    const [dataMobInfo, setDataMobInfo] = useState([]);
    const [dataMobLoc,  setDataMobLoc]  = useState([]);
    const searchParams                  = useSearchParams();

    let mobInfo = [{
        mobId:    "",
        mobName:  "",
        mobLevel: "",
        mobType:  "",
        mobHp:    "",
        mobMp:    "",
        mobStr:   "",
        mobDex:   "",
        mobCon:   "",
        mobInt:   "",
        mobWit:   "",
        mobMen:   "",
        mobPAtk:  "",
        mobMAtk:  "",
        mobPDef:  "",
        mobMDef:  "",
        dropList: [
            {
                itemId:       "",
                itemName:     "",
                itemMin:      "",
                itemMax:      "",
                itemChance:   "",
                itemCategory: "",
            },
        ],
    }];

    useEffect(() => {
        async function getPageData() {
            let   searchId = searchParams.get('id');
                  searchId = searchId == null ? 0 : searchId;
            const respMobInfo = await fetch( '/main/get-mobinfo?id=' + searchId, {
                method: "GET",
                headers: { "Content-Type": "application/json", },
            } );
            const resMobInfo = await respMobInfo.json();

            // clear arr
            mobInfo[0].dropList = [];
            for( let x = 0; x < resMobInfo.mobinfo.length; x++ ) {
                let item_ = resMobInfo.mobinfo[x];

                mobInfo[0].mobId    = item_.mobId;
                mobInfo[0].mobName  = item_.mobName;
                mobInfo[0].mobLevel = item_.mobLevel;
                mobInfo[0].mobType  = item_.mobType;
                mobInfo[0].mobHp    = item_.mobHp;
                mobInfo[0].mobMp    = item_.mobMp;
                mobInfo[0].mobStr   = item_.mobStr;
                mobInfo[0].mobDex   = item_.mobDex;
                mobInfo[0].mobCon   = item_.mobCon;
                mobInfo[0].mobInt   = item_.mobInt;
                mobInfo[0].mobWit   = item_.mobWit;
                mobInfo[0].mobMen   = item_.mobMen;
                mobInfo[0].mobPAtk  = item_.mobPAtk;
                mobInfo[0].mobMAtk  = item_.mobMAtk;
                mobInfo[0].mobPDef  = item_.mobPDef;
                mobInfo[0].mobMDef  = item_.mobMDef;

                mobInfo[0].dropList.push({
                    itemId:       item_.dropItemId,
                    itemName:     item_.itemName,
                    itemIcon:     item_.itemIcon,
                    itemMin:      item_.dropMin,
                    itemMax:      item_.dropMax,
                    itemChance:   item_.dropChance,
                    itemCategory: item_.dropCategory,
                });
            }

            setDataMobInfo( mobInfo );

            // MOB LOC

            const respMobLoc = await fetch( '/main/get-mobloc?id=' + searchId, {
                method: "GET",
                headers: { "Content-Type": "application/json", },
            } );
            const resMobLoc = await respMobLoc.json();

            setDataMobLoc( [resMobLoc] );
        }
        getPageData();

    }, []);

    return (
        <div className="content__wrap">
            <div className="content__title">Mob Info</div>
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
            {
                ( dataMobInfo || [] ).map( ( val_, index ) => {
                    return (
                        <div className="group" key={index}>
                            <div className="mobinfo">
                                <div className="mobinfo__cola">
                                    <span className="mobinfo__name">{val_.mobName}</span>
                                    <span className="mobinfo__lvl">{val_.mobLevel}</span>
                                </div>
                                <div className="mobinfo__colb">
                                    <MobInfoItem list={dataMobInfo}  />
                                </div>
                            </div>
                        </div>
                    )
                } )
            }
            <MobInfoLoc coords={dataMobLoc} />
        </div>
    )
}
