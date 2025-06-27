function bemVindo(){
    const audio = document.getElementById("audio")
    let inicio = document.getElementById("inicio")


    inicio.classList.add("sobe")
    audio.play()
    
    setTimeout(function(){
        inicio.style.display = "none"
    }, 1600)
}