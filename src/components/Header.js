import React,{useState} from "react"
import "../components/assets/style.scss"
import {SearchInput} from "../components/SearchInput"
import Axios from "axios"

export const Header = () => {
    const[query, setQuery] = useState('')

    const getRecipe = async (e) => {
        e.preventDefault();
        const recipeName = setQuery(e.target.elements.recipeName.value);
        const api_call = await Axios.get(`https://api.edamam.com/search?q=${setQuery}&app_id=6f6061ed&app_key=d04a57d6cd2067c6331a15d5babd5250`);
        const getData = await api_call;

      

        console.log(recipeName ,getData);
    }
   
    return(
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-2">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="col-md-8 col-8">
                        <div className="searchInput">
                            <i className="fas fa-search"></i>
                            <SearchInput  getRecipe={getRecipe}/>
                        </div>
                    </div>
                    <div className="col-md-2 col-2">
                    <i className="far fa-bell"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}