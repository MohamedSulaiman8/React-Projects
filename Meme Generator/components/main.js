
import { useEffect, useState } from "react";
function Main(){
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        url:"http://i.imgflip.com/1bij.jpg"
    }
    )
    const [allMemes,setAllmemes]=useState([])
    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllmemes(data.data.memes))
    })
    function updateMeme(){
        const randomNumber=Math.floor(Math.random()*allMemes.length)
        const randomUrl=allMemes[randomNumber].url
        setMeme(prev=>({
            ...prev,
            url:randomUrl
        }))
    }

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    return(
        <div className="main">
            <div className="form">
                <input 
                    name="topText" 
                    className="inputs" 
                    type="text" 
                    placeholder="Top text"
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    name="bottomText" 
                    className="inputs" 
                    type="text" 
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={updateMeme} className="button">Get a new meme image!!!</button>
            </div>
            <div className="img">
                <img  className="meme-image" src={meme.url} alt="meme"/>
                <h2 className="meme-text top" >{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
export default Main;