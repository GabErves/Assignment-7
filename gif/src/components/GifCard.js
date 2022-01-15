import React, { Fragment } from "react";

const GifCard = (props) =>{
    const {datafromparent} = props
    return(
        <Fragment>
            {
                datafromparent.map((elm)=>{
                    return(
                        <Fragment>
                            <h2>{elm.url}</h2>
                        </Fragment>
                    )
                }) 
            }
        </Fragment>

    )

}
// const GifPic = () =>{
//     <GifCard.Body>
//         <GifCard.Title></GifCard.Title>
//         <GifCard.Text>Popular Gifs</GifCard.Text>
//     </GifCard.Body>
// }

export default GifCard;