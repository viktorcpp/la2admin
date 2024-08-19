
import { FormEvent } from 'react';

export default function SearchBar() {

    function handleSubmit(event) {

        const formData = new FormData(event.currentTarget);

        if( formData.get("search") == '' )
            event.preventDefault();
    }

    return (
        <div className="searchbar">
            <form action="/main/search" method="get" onSubmit={handleSubmit}>
                <div className="searchbar__row">
                    <div className="form-item form-item-search">
                        <input type="search" name="search" placeholder="Enter text here"/>
                    </div>
                    <div className="form-item form-item-submit">
                        <div className="form-submit30__left">
                            <div className="form-submit30__right">
                                <input type="submit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
