let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/abdelhak-ch/repos");
myRequest.send();
myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let jsonData = JSON.parse(this.responseText);
        for (let i=0; i < jsonData.length; i++) {
            if ( jsonData[i].name !== "Templet-Two" && jsonData[i].name !== "Kasper" && jsonData[i].name !== "localStorage") {
              print(jsonData[i].name);
              open(`https://abdelhak-ch.github.io/${jsonData[i].name}/`);
            }
        }
    }
}
function print(value) {
    let content = document.createTextNode(value)
    let element = document.createElement("div")
    element.appendChild(content)
    document.body.appendChild(element)
}

function open(url) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `<iframe 
          width="800" 
          height="1000" 
          src="${url}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>`
    
}
