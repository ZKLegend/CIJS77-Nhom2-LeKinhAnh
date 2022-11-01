function printWord() {
    let p = document.createElement('p');
    p.innerText = "Hello World";
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(p);
}
