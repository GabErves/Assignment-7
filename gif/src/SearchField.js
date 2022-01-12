const SearchField = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
        <span className="visually-hidden">Search gifs</span>

        </label>

        <input type="text"
        id = "header-search"
        placeholder ="search gifs"
        name ="s"/>
        
        <button type ="submit">Search here!</button>
        
    </form>

);


    

export default SearchField;