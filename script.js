let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/abdelhak-ch/repos");
myRequest.send();
myRequest.onreadystatechange = function() {
    print(myRequest.status);
    print(myRequest.readyState);
    if (this.readyState === 4 && this.status === 200) {
        print("hello world");
        let jsonData = JSON.parse(this.responseText)
        print(this.readyState);
        print(this.responeText);
        for (let i=0; i < jsonData.length; i++) {
            print(jsonData[i])
        }
    }
} 

function print(value) {
    let content = document.createTextNode(value)
    let element = document.createElement("div")
    element.appendChild(content)
    document.body.appendChild(element)
}
