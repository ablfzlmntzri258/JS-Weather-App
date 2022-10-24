const firstPageElements = document.querySelectorAll(".heading,.p1,.p2,.input,.get,.note")
const loaderElements = document.querySelectorAll(".lds-hourglass,.p3,#cancel")
const input = document.querySelector(".input")

function loader() {
    for (let i = 0; i < firstPageElements.length; i++) {
        firstPageElements[i].style.display = "none"
    }
    loaderElements[0].style.display = "inline-block"
    loaderElements[1].style.display = "block"
    loaderElements[2].style.display = "block"
    let resultObject;
    const req = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=eb3e2db5cff5f470df5ca2d1ba062f70`)
    req.then((result) => {
        if(result.ok)
            return result.text()
    })
        .then((result) => {
            resultObject = JSON.parse(result)
            const tempInCelsius = Math.trunc(Number(resultObject.main.temp) - 273);
            const windSpeedInKM = (Math.round(resultObject.wind.speed * 3.6 * 100) / 100).toFixed(2)
            document.querySelector(".result").innerHTML =
                "City Name :  "+resultObject.name+"<br/>"+
                "Description :  "+resultObject.weather[0].description+"<br/>"+
                "Temperature :  "+tempInCelsius+" &#8451"+"<br/>"+
                "Humidity :  "+resultObject.main.humidity+"%"+"<br/>"+
                "Wind Speed :  "+windSpeedInKM+"km/h"+"<br/>"+
                "Note : Information are received from <a href='https://openweathermap.org/current'>openweathermap.org</a>"


            loaderElements[0].style.display = "none"
            loaderElements[1].style.display = "none"
            loaderElements[2].style.display = "none"
            document.querySelector(".result").style.display = "block"
            document.querySelector(".result").style.marginTop = ""
            document.getElementById("back").style.display = "block"
    }).catch(() => {
        document.querySelector(".result").innerHTML =
            "Something went wrong!"+"<br/>"+
            "Double-check your spelling and Internet connection and try again."

        loaderElements[0].style.display = "none"
        loaderElements[1].style.display = "none"
        loaderElements[2].style.display = "none"
        document.querySelector(".result").style.display = "block"
        document.querySelector(".result").style.marginTop = "25%"
        document.getElementById("back").style.display = "block"
    })

}

document.querySelector(".input").addEventListener("keydown",(e) => {
    if(e.keyCode == 13)
    {
        loader()
    }
})
document.querySelector(".get").addEventListener("click",loader)

document.getElementById("cancel").addEventListener("click",() => {
    loaderElements[0].style.display = "none"
    loaderElements[1].style.display = "none"
    loaderElements[2].style.display = "none"
    firstPageElements[0].style.display = ""
    firstPageElements[1].style.display = ""
    firstPageElements[2].style.display = ""
    firstPageElements[3].style.display = ""
    firstPageElements[4].style.display = ""
    firstPageElements[5].style.display = ""
})

document.getElementById("back").addEventListener("click",() => {
    document.querySelector(".result").style.display = "none"
    document.getElementById("back").style.display = "none"
    firstPageElements[0].style.display = ""
    firstPageElements[1].style.display = ""
    firstPageElements[2].style.display = ""
    firstPageElements[3].style.display = ""
    firstPageElements[4].style.display = ""
    firstPageElements[5].style.display = ""
})



