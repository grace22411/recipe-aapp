import React from "react"
import "../components/assets/style.scss"


export const SearchInput = props => {
    return(
        <div className="search">
            <form onSubmit={props.getRecipe}>
                <input type="text"  name="recipeName" placeholder="Search"></input>
            </form>
        </div>
    )
}