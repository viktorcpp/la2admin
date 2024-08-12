
"use client"

import Image from "next/image";
import React from "react";

export default function CastleStatusItem(props) {

    const refMarker = React.createRef();
    const refLines  = React.createRef();

    function CastleMEnter() {
        refLines.current.style.opacity = 1
    }

    function CastleMLeave() {
        refLines.current.style.opacity = 0
    }

    return (
        <div className="castles_status__castle" style={props.stylesMain}>
            <img src={"/castles_status/"+props.srcMarker+".png"} alt="" ref={refMarker} className="castles_status__castle_marker" onMouseEnter={CastleMEnter} onMouseLeave={CastleMLeave} style={props.stylesMarker}/>
            <img src={"/castles_status/"+props.srcLines+".png"} alt="" ref={refLines} className="castles_status__castle_lines" style={props.stylesLines}/>
        </div>
    )
}
