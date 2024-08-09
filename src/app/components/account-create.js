
import React from "react";

export default function AccountCreate(props) {

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const login    = formData.get('login');
        const pass     = formData.get('pass');

        const response = await fetch('/main/acc-create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, pass }),
        })

        const res = await response.json();
    }

    return (
        <div className="acc_create">
            <h3>Create Account</h3>
            <form action="#" onSubmit={handleSubmit}>
                <div className="form-item form-item-text">
                    <label>ID</label>
                    <div className="form-item-text-back">
                        <input type="text" className="input-text" name="login" required/>
                    </div>
                </div>
                <div className="form-item form-item-text">
                    <label>PWD</label>
                    <div className="form-item-text-back">
                        <input type="password" className="input-text" name="pass" required/>
                    </div>
                </div>
                <div className="login__buttons">
                    <div className="login__buttons_cola">
                        <div className="form-item form-item-submit">
                            <div className="form-item-submit-back">
                                <div className="form-item-submit-lbl">Create</div>
                                <input type="submit" value="" className="input-submit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
