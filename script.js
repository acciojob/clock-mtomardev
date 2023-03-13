//your JS code here. If required.
let time = document.getElementById("timer")
setInterval(()=>{
    let d = new Date()
    let hr = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    let ampm = hr < 12 ? "AM" : "PM";
    let month = d.getMonth()+1
    let date = d.getDate()
    let year = d.getFullYear()

    if(hr>12){
        hr = hr-12
    }
    if(hr === 12){
        hr = 12
    }

    time.innerHTML = `${month}/${date}/${year} ${hr}:${min}:${sec} ${ampm} `
},1000)