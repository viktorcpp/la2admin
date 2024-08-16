
"use client"

import React, {useEffect} from "react";

export default function CastleStatusItem(props) {

    const props_    = props;
    const refMarker = React.createRef();
    const refLines  = React.createRef();

    function CastleMEnter() {
        refLines.current.style.opacity = 1;
        props_.hover( props_.castle );
    }

    function CastleMLeave() {
        refLines.current.style.opacity = 0
    }

    useEffect(() => {
        console.log( "CastleStatusItem => useEffect >>>>> " + props.Test );
    }, []);

    return (
        <div className="castles_status__castle" style={props_.castle.stylesMain}>
            <img src={"/castles_status/"+props_.castle.srcMarker+".png"} alt="" ref={refMarker} className="castles_status__castle_marker" onMouseEnter={CastleMEnter} onMouseLeave={CastleMLeave} style={props.stylesMarker}/>
            <img src={"/castles_status/"+props_.castle.srcLines+".png"} alt="" ref={refLines} className="castles_status__castle_lines" style={props_.castle.stylesLines}/>
        </div>
    )
}
