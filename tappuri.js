document.querySelector("#tappuri").innerHTML = `<div id="tappuri-text"><div id="tappuri-name"></div><div id="tappuri-content"></div></div> <style> @import url('https://fonts.googleapis.com/css?family=Open+Sans'); body {  margin: 0;  overflow: hidden;  font-family: 'Open Sans';  -moz-user-select: -moz-none;  -khtml-user-select: none;  -webkit-user-select: none;  -ms-user-select: none;  user-select: none; } #tappuri {  width: ${window.innerWidth}px;  height: ${window.innerHeight}px;  background-size: 100% 100%; } #tappuri-text {  width: 90%;  height: 100px;  background-color: rgba(255, 255, 255, 0.75);  position: absolute;  left: 5%;  bottom: 5%;  border-radius: 5px; } #tappuri-name {  position: absolute;  top: -40px;  left: 5px;  font-size: 30px;  color: #eee;  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; } #tappuri-content {  font-size: 20px;  color: #111;  margin: 5px; } </style>`;
class Tappuri {
    setName(e) {
        document.querySelector("#tappuri-name").innerText = e
    }
    setContent(e) {
        document.querySelector("#tappuri-content").innerText = e
    }
    setBackground(e) {
        document.querySelector("#tappuri").innerHTML += `<style>#tappuri{background-image:url('${e}');}</style>`
    }
    constructor(e, t) {
        e(this), document.querySelector("*").addEventListener("click", () => {
            t(this)
        }, !0)
    }
}
