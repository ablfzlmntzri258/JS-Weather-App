const insideDiv = document.querySelectorAll(".heading,.p1,.p2,.input,.get")
const loaderElements = document.querySelectorAll(".lds-hourglass,.p3")


function loader() {
    for (var i = 0; i < insideDiv.length; i++) {
        insideDiv[i].style.display = "none"
    }
    loaderElements[0].style.display = "inline-block"
    loaderElements[1].style.display = "block"

}

document.querySelector(".get").addEventListener("click",loader)



