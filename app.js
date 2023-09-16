let wk = document.querySelector("#main");
let url = document.querySelector("#url");
let number = document.querySelector("#number");

let a,b;
function myFunction(url,number) {
    a=url.value;
    // document.getElementById("demo").innerHTML = url;
    b=number.value;
    // document.getElementById("demo1").innerHTML = number;
    show(a,b);
    console.log(a);
    console.log(b);
}


// prompt('enter a url');
// console.log(url.value)

function show(yurl,ynumber){

    let arr=a.split("v=");



    let yid="https://www.youtube.com/embed/"+arr[1]+"?autoplay=1&mute=1";

    for (let i = 0; i < ynumber; i++) {
        let fram = document.createElement("iframe");
        fram.setAttribute("width","150");
        fram.setAttribute("height","150");
        fram.setAttribute("src",yid);
        fram.setAttribute("allow","autoplay");
        fram.style.display="inline";
    


        fram.innerHTML = yurl;
        wk.appendChild(fram);
    }
}


