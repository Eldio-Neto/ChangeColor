function changeBG(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    const rgb = document.getElementById("RGB")
    rgb.innerText = `rgb (${red}, ${green}, ${blue})`

    
   let chang = document.getElementById("mudar")

   chang.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`


}