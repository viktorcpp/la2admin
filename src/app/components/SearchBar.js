
export default function SearchBar() {
    return (
        <div className="searchbar">
            <form action="/main/search" method="get">
                <div className="searchbar__row">
                    <div className="form-item form-item-search">
                        <input type="search" name="search" placeholder="Enter text here"/>
                    </div>
                    <div className="form-item form-item-submit">
                        <input type="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
