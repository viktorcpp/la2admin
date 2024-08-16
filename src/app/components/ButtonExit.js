import React from "react";

export default function ButtonExit() {
    return (
        <div className="btn_exit">
            <form action="/" method="get">
                <div className="form-item form-item-submit">
                    <div className="form-item-submit-back">
                        <div className="form-item-submit-lbl">Exit</div>
                        <input type="submit" value="" className="input-submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
