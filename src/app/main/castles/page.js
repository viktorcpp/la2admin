
"use client"

import React, {useEffect, useState} from "react";

import PageNavbar        from "../../components/PageNavbar";
import ButtonExit        from "../../components/ButtonExit";
import CastleStatusItem  from "../../components/CastleStatusItem";
import CastleStatusPopup from "../../components/CastleStatusPopup";

export default function CastlesStatus() {

    const [ castlesData, setCastlesData ]         = useState([]);
    const [ popupCastleData, setPopupCastleData ] = useState([]);
    const popup_ = <CastleStatusPopup castleData={popupCastleData} />;
    let castles_data_ = [];
    castles_data_[1] = {
        stylesMain :{left:'348px',top:'1198px',width:'51px',height:'53px'},
        stylesLines:{right:'-17px'},
        srcMarker  :"gludio",
        srcLines   :"gludio_lines",
    };
    castles_data_[2] = {
        stylesMain :{left:'488px',top:'1360px',width:'55px',height:'52px'},
        stylesLines:{right:'1px',top:'-37px'},
        srcMarker  :"dion",
        srcLines   :"dion_lines",
    };
    castles_data_[3] = {
        stylesMain :{left:'785px',top:'1315px',width:'53px',height:'50px'},
        stylesLines:{right:'0px',top:'-3px'},
        srcMarker  :"giran",
        srcLines   :"giran_lines",
    };
    castles_data_[4] = {
        stylesMain :{left:'675px',top:'954px',width:'57px',height:'54px'},
        stylesLines:{right:'-2px',top:'-63px'},
        srcMarker  :"oren",
        srcLines   :"oren_lines",
    };
    castles_data_[5] = {
        stylesMain :{left:'896px',top:'838px',width:'52px',height:'67px'},
        stylesLines:{right:'-2px',top:'0px'},
        srcMarker  :"aden",
        srcLines   :"aden_lines",
    };
    castles_data_[6] = {
        stylesMain :{left:'785px',top:'1657px',width:'55px',height:'52px'},
        stylesLines:{right:'0px',top:'-93px'},
        srcMarker  :"innadril",
        srcLines   :"innadril_lines",
    };
    castles_data_[7] = {
        stylesMain :{left:'900px',top:'689px',width:'53px',height:'45px'},
        stylesLines:{right:'-20px',top:'-39px'},
        srcMarker  :"goddard",
        srcLines   :"goddard_lines",
    };
    castles_data_[8] = {
        stylesMain :{left:'448px',top:'668px',width:'53px',height:'45px'},
        stylesLines:{right:'-367px',top:'-423px'},
        srcMarker  :"rune",
        srcLines   :"rune_lines",
    };
    castles_data_[9] = {
        stylesMain :{left:'653px',top:'344px',width:'72px',height:'36px'},
        stylesLines:{right:'-43px',top:'0px'},
        srcMarker  :"schuttgart",
        srcLines   :"schuttgart_lines",
    };

    useEffect(() => {

        async function getPageData() {

            const response = await fetch('/main/get-castles-status', {
                method: "GET",
                headers: { "Content-Type": "application/json", },
            });
            const res = await response.json();

            for( let x = 0; x < res.result.length; x++ )
            {
                let castle_ = res.result[x];
                castle_.castleName += ` (${castle_.castleId})`;
                castles_data_[castle_.castleId] = Object.assign( castles_data_[castle_.castleId], castle_ );

                let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                let date = new Date( parseInt(castles_data_[castle_.castleId].siegeDate) + 1 );
                let day = date.getDay() + 1;
                let month = months[date.getMonth()];
                let year = date.getFullYear();
                let date_end = `${month} . ${day} . ${year}`;

                castles_data_[castle_.castleId].siegeDate  = date.toLocaleDateString().replaceAll('/','.') + '  ' + date.toLocaleTimeString();
            }

            setCastlesData(castles_data_);
        }

        getPageData();

    }, []);

    function handleHover(castle) {
        setPopupCastleData(castle);
    }

    return (
        <div className="content__wrap">
            <div className="content__title">Admin Panel</div>
            <div className="group">
                <PageNavbar/>
            </div>
            <div className="group">
                <h3>Castles Status</h3>
            </div>
            <div className="group">
                <div className="castles_status">
                    <img src="/worldmap.jpg" alt="" className="castles_status__image" />
                    {
                        castlesData.map(( castle, index )=>{
                            return(
                                <CastleStatusItem popup={popup_}
                                                  hover={handleHover}
                                                  castle={castle}
                                                  castleName={castle.castleName}
                                                  key={index} />
                            )
                        })
                    }
                    {popup_}
                </div>
            </div>
            <ButtonExit/>
        </div>
    )
}
