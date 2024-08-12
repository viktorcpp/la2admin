
export default function CastleStatusPopup() {
    return (
        <div className="castles_status_popup window">
            <div className="castles_status_popup_inner window__inner">

                <div className="castles_status_popup__row castles_status_popup__title">TITLE</div>
                <div className="castles_status_popup__row castles_status_popup__name">Castle: NAME</div>
                <div className="castles_status_popup__row castles_status_popup__tax">Castle Tax: 10%</div>
                <div className="castles_status_popup__row castles_status_popup__clan">Castle Clan: Clan Name</div>
                <div className="castles_status_popup__row castles_status_popup__siege_date">Siege Date: Clan Level</div>

                <div className="window__corner window__corner_lt"></div>
                <div className="window__corner window__corner_rt"></div>
                <div className="window__corner window__corner_lb"></div>
                <div className="window__corner window__corner_rb"></div>
            </div>
        </div>
    )
}
