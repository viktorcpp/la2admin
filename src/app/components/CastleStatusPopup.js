
export default function CastleStatusPopup(props) {

    return (
        <div className="castles_status_popup window">
            <div className="castles_status_popup_inner window__inner">

                <div className="castles_status_popup__row castles_status_popup__name">{props.castleData.castleName}</div>
                <div className="castles_status_popup__row castles_status_popup__tax">Tax Rate: {props.castleData.taxPercent + '%'}</div>
                <div className="castles_status_popup__row castles_status_popup__clan">Clan: {props.castleData.clanName} ( {props.castleData.clanLevel} lvl )</div>
                <div className="castles_status_popup__row castles_status_popup__siege_date">Siege: {props.castleData.siegeDate}</div>

                <div className="window__corner window__corner_lt"></div>
                <div className="window__corner window__corner_rt"></div>
                <div className="window__corner window__corner_lb"></div>
                <div className="window__corner window__corner_rb"></div>
            </div>
        </div>
    )
}
