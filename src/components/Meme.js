import React from "react"

function Meme() {
    const [memesData, setmemesData] = React.useState([])
    const [meme, setMeme] = React.useState({
        memeUrl:
            "https://play-lh.googleusercontent.com/YNBUh-8PzcAXryawZ559rEUDowEOgXsPDfTDBOi4AQQR6NTsWGvYTU1tMRctN3uoRqw8",
        topText: "",
        bottomText: "",
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => {
                setmemesData(data.data.memes)
            })
    }, [])

    function getRandomMeme() {
        let randomIndex = Math.floor(Math.random() * 100)
        if (memesData[0]) {
            setMeme((prevMeme) => ({
                ...prevMeme,
                memeUrl: memesData[randomIndex].url,
            }))
        }
    }

    function changeMeme(event) {
        let { name, value } = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <main>
            <div className="meme_form">
                <input
                    type="text"
                    className="meme_input"
                    placeholder="Top text"
                    value={meme.topText}
                    onChange={changeMeme}
                    name="topText"
                />
                <input
                    type="text"
                    className="meme_input"
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    onChange={changeMeme}
                    name="bottomText"
                />
                <button className="meme_submit" onClick={getRandomMeme}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme_image_div">
                <img src={meme.memeUrl} id="meme_image" />
                <h2 className="meme_text top">{meme.topText}</h2>
                <h2 className="meme_text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme
