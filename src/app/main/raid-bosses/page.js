
"use client"

import React                 from 'react';
import {useEffect, useState} from "react";
import {useSearchParams}     from 'next/navigation';

import PageNavbar          from "../../components/navbar";
import PageNavbarSubRBList from "../../components/navbar-sub-rblist";
import NextBreadcrumb      from "../../components/NextBreadcrumb";
import ButtonExit          from "../../components/button-exit";
import RBInfoItem          from "../../components/rb-info-item";

export default function Main() {

    const [dataResponse, setDataResponse] = useState([]);
    const searchParams                    = useSearchParams();

    let rboss_data = [];

    useEffect(() => {

        async function getPageData() {

            const search   = searchParams.get('rblvl');
            const request_ = search == null ? '?rblvl=20' : '?rblvl=' + search;

            const response = await fetch( '/main/get-raidbosses-list' + request_, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            } );
            const res = await response.json();

            for( let x = 0; x < res.rboss.length; x++ )
            {
                let rboss = res.rboss[x];

                rboss_data[rboss.id] = rboss_data[rboss.id] == null ? [] : rboss_data[rboss.id];
                rboss_data[rboss.id].push({
                    id:       rboss.id,
                    name:     rboss.name,
                    level:    rboss.level,
                    itemId:   rboss.itemId,
                    itemName: rboss.itemname,
                    dropMin:  rboss.min,
                    dropMax:  rboss.max,
                    chance:   rboss.chance,
                    iconName: rboss.iconname,
                });
            }

            rboss_data = rboss_data.sort( ( a, b )=>{
                if( a[0].level < b[0].level )
                    return -1

                return 1;
            } );

            setDataResponse( rboss_data );
        }
        getPageData();

    }, []);

    return (
        <div className="content__wrap">
            <div className="content__title">Raid Bosses</div>
            <div className="group">
                <NextBreadcrumb
                    homeElement={'Home'}
                    separator={<span> | </span>}
                    activeClasses='text-amber-500'
                    containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
                />
            </div>
            <div className="group">
                <PageNavbar />
            </div>
            <div className="group">
                <PageNavbarSubRBList />
            </div>
            {
                dataResponse.map((rboss, index) => {
                    return (
                        <div className="rbinfo" key={index}>
                            <div className="rbinfo__cola">
                                <a href={"#" + rboss[0].id} className="rbinfo__name">{rboss[0].name}</a>
                                <span className="rbinfo__lvl">{rboss[0].level}</span>
                            </div>
                            <div className="rbinfo__colb">
                                <RBInfoItem list={rboss} />
                            </div>
                        </div>
                    )
                })
            }
            <ButtonExit />
        </div>
    );
}