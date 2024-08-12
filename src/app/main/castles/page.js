
import React from "react";

import PageNavbar        from "../../components/navbar";
import ButtonExit        from "../../components/button-exit";
import CastleStatusItem  from "../../components/castle-status-item";
import CastleStatusPopup from "../../components/castle-status-popup";

export default function Main() {

    const sql_ =
       `SELECT 
        castle.id AS castleId, 
        castle.name AS castleName,
        castle.taxPercent,
        castle.siegeDate,
        castle.siegeDayOfWeek,
        castle.siegeHourOfDay,
        
        clan_data.clan_id AS clanId,
        clan_data.clan_name AS clanName,
        clan_data.clan_level AS clanLevel,
        clan_data.hasCastle,
        clan_data.ally_id AS allyId,
        clan_data.ally_name AS allyName,
        clan_data.leader_id AS leaderId
         
        FROM castle 
        LEFT JOIN clan_data ON clan_data.hasCastle=castle.id`;

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

                    <CastleStatusItem stylesMain={{left:345+'px',top:1197+'px',width:51+'px',height:53+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-17+'px'}}
                                      srcMarker="gludio"
                                      srcLines="gludio_lines" />

                    <CastleStatusItem stylesMain={{left:488+'px',top:1360+'px',width:55+'px',height:52+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:1+'px',top:-37+'px'}}
                                      srcMarker="dion"
                                      srcLines="dion_lines" />

                    <CastleStatusItem stylesMain={{left:785+'px',top:1657+'px',width:55+'px',height:52+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:0+'px',top:-93+'px'}}
                                      srcMarker="innadril"
                                      srcLines="innadril_lines" />

                    <CastleStatusItem stylesMain={{left:785+'px',top:1315+'px',width:53+'px',height:50+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:0+'px',top:-3+'px'}}
                                      srcMarker="giran"
                                      srcLines="giran_lines" />

                    <CastleStatusItem stylesMain={{left:675+'px',top:954+'px',width:57+'px',height:54+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-2+'px',top:-63+'px'}}
                                      srcMarker="oren"
                                      srcLines="oren_lines" />

                    <CastleStatusItem stylesMain={{left:896+'px',top:838+'px',width:52+'px',height:67+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-2+'px',top:0+'px'}}
                                      srcMarker="aden"
                                      srcLines="aden_lines" />

                    <CastleStatusItem stylesMain={{left:448+'px',top:668+'px',width:53+'px',height:45+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-367+'px',top:-423+'px'}}
                                      srcMarker="rune"
                                      srcLines="rune_lines" />

                    <CastleStatusItem stylesMain={{left:900+'px',top:689+'px',width:53+'px',height:45+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-20+'px',top:-39+'px'}}
                                      srcMarker="goddard"
                                      srcLines="goddard_lines" />

                    <CastleStatusItem stylesMain={{left:653+'px',top:344+'px',width:72+'px',height:36+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-43+'px',top:-0+'px'}}
                                      srcMarker="schuttgart"
                                      srcLines="schuttgart_lines" />

                    <CastleStatusPopup />
                </div>
            </div>
            <ButtonExit/>
        </div>
    )
}
