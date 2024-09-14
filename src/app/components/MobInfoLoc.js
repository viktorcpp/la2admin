
export default function MobInfoLoc(props) {

    if( !props.coords[0] ) return;

    const MIN_X  = 131072; //-131072;
    const MAX_X  = 229376;
    const FULL_X = 360448;

    const MIN_Y  = 262144; // -262144;
    const MAX_Y  = 262144;
    const FULL_Y = 524288;

    const items_ = props.coords[0].result.map( ( val_, index ) => {

        let posX = (val_.posX+MIN_X)*100/FULL_X;
        let posY = (val_.posY+MIN_Y)*100/FULL_Y;

        return (
            <div key={index} className="mob_info_loc_marker" style={{left: posX+'%', top: posY+'%'}}></div>
        )
    } )

    return (
        <div className="mob_info_loc">
            <img src="/worldmap.jpg" alt="" className="mob_info_loc_map" />
            {items_}
        </div>
    )
}
