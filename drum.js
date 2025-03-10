const band = document.querySelector("#band");

const assets = ["crash","kick","snare","tom"];


// const div = document.createElement("div");
const fregment = document.createDocumentFragment();
assets.forEach((asset) => {
    const box = document.createElement("div"); //blank div
    box.classList.add("box");
    const name = document.createElement("h2");

    box.style.backgroundImage = `url(assets/${asset}.png)`;

    name.innerHTML = asset.toUpperCase();

    const sound = document.createElement("audio");
    sound.src = "assets/" + asset + ".mp3";

    box.addEventListener("click", () => {
        sound.play();
    })

    window.addEventListener("keydown", (e) => {
        if(e.key == "c" && asset == "crash"){
            sound.play();
            box.classList.add("scale");
        }
        else if(e.key == "k" && asset == "kick"){
            sound.play();
            box.classList.add("scale");
        }else if(e.key == "s" && asset == "snare"){
            sound.play();
            box.classList.add("scale");
        }else if(e.key == "t" && asset == "tom"){
            sound.play();
            box.classList.add("scale");
        }
    })

    window.addEventListener("keyup", (e) => {
        if(e.key == "c" && asset == "crash"){
            box.classList.remove("scale");
        }
        else if(e.key == "k" && asset == "kick"){
            box.classList.remove("scale");
        }else if(e.key == "s" && asset == "snare"){
            box.classList.remove("scale");
        }else if(e.key == "t" && asset == "tom"){
            box.classList.remove("scale");
        }
    })

    box.append(name);
    fregment.append(box);
})

band.append(fregment);

// window.addEventListener("keypress", (e) => {
//     assets.forEach((asset) => {
//         const sound = document.createElement("audio");
//         sound.src = "assets/" + asset + ".mp3";
//         if(e.key === asset.slice(0, 1)){
//             sound.play();
//         }
//     })
// })