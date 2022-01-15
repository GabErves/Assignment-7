const SearchField = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
        <span className="visually-hidden">Search gifs</span>

        </label>

        <input type="text"
        id = "header-search"
        placeholder ="search gifs"
        name ="s"/>


        
        <button type ="submit" >Search trending here!</button>
        <button type ="submit" >Search random here!</button>
        <button type ="submit" >Regular here!</button>
        
    </form>

);


    

export default SearchField;