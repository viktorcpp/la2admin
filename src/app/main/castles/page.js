
import Image from "next/image";
import React from "react";

import ImageWorldMap          from "../../images/worldmap.jpg";

import ImageCastleGludio          from "../../images/castles_status_gludio.png";
import ImageCastleGludioLines     from "../../images/castles_status_gludio_lines.png";
import ImageCastleDion            from "../../images/castles_status_dion.png";
import ImageCastleDionLines       from "../../images/castles_status_dion_lines.png";
import ImageCastleInnadril        from "../../images/castles_status_innadril.png";
import ImageCastleInnadrilLines   from "../../images/castles_status_innadril_lines.png";
import ImageCastleGiran           from "../../images/castles_status_giran.png";
import ImageCastleGiranLines      from "../../images/castles_status_giran_lines.png";
import ImageCastleOren            from "../../images/castles_status_oren.png";
import ImageCastleOrenLines       from "../../images/castles_status_oren_lines.png";
import ImageCastleAden            from "../../images/castles_status_aden.png";
import ImageCastleAdenLines       from "../../images/castles_status_aden_lines.png";
import ImageCastleRune            from "../../images/castles_status_rune.png";
import ImageCastleRuneLines       from "../../images/castles_status_rune_lines.png";
import ImageCastleGoddard         from "../../images/castles_status_goddard.png";
import ImageCastleGoddardLines    from "../../images/castles_status_goddard_lines.png";
import ImageCastleSchuttgart      from "../../images/castles_status_schuttgart.png";
import ImageCastleSchuttgartLines from "../../images/castles_status_schuttgart_lines.png";

import PageNavbar       from "../../components/navbar";
import ButtonExit       from "../../components/button-exit";
import CastleStatusItem from "../../components/castle-status-item";

export default function Main() {

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
                    <Image src={ImageWorldMap} alt="" className="castles_status__image" />

                    <CastleStatusItem stylesMain={{left:345+'px',top:1197+'px',width:51+'px',height:53+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-17+'px'}}
                                      srcMarker={ImageCastleGludio}
                                      srcLines={ImageCastleGludioLines} />

                    <CastleStatusItem stylesMain={{left:488+'px',top:1360+'px',width:55+'px',height:52+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:1+'px',top:-37+'px'}}
                                      srcMarker={ImageCastleDion}
                                      srcLines={ImageCastleDionLines} />

                    <CastleStatusItem stylesMain={{left:785+'px',top:1657+'px',width:55+'px',height:52+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:0+'px',top:-93+'px'}}
                                      srcMarker={ImageCastleInnadril}
                                      srcLines={ImageCastleInnadrilLines} />

                    <CastleStatusItem stylesMain={{left:785+'px',top:1315+'px',width:53+'px',height:50+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:0+'px',top:-3+'px'}}
                                      srcMarker={ImageCastleGiran}
                                      srcLines={ImageCastleGiranLines} />

                    <CastleStatusItem stylesMain={{left:675+'px',top:954+'px',width:57+'px',height:54+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-2+'px',top:-63+'px'}}
                                      srcMarker={ImageCastleOren}
                                      srcLines={ImageCastleOrenLines} />

                    <CastleStatusItem stylesMain={{left:896+'px',top:838+'px',width:52+'px',height:67+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-2+'px',top:0+'px'}}
                                      srcMarker={ImageCastleAden}
                                      srcLines={ImageCastleAdenLines} />

                    <CastleStatusItem stylesMain={{left:448+'px',top:668+'px',width:53+'px',height:45+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-367+'px',top:-423+'px'}}
                                      srcMarker={ImageCastleRune}
                                      srcLines={ImageCastleRuneLines} />

                    <CastleStatusItem stylesMain={{left:900+'px',top:689+'px',width:53+'px',height:45+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-20+'px',top:-39+'px'}}
                                      srcMarker={ImageCastleGoddard}
                                      srcLines={ImageCastleGoddardLines} />

                    <CastleStatusItem stylesMain={{left:653+'px',top:344+'px',width:72+'px',height:36+'px'}}
                                      stylesMarker={null}
                                      stylesLines={{right:-43+'px',top:-0+'px'}}
                                      srcMarker={ImageCastleSchuttgart}
                                      srcLines={ImageCastleSchuttgartLines} />
                </div>
            </div>
            <ButtonExit/>
        </div>
    )
}
