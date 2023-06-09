
setInterval(() => {
    let date = new Date();
    let ampm = document.getElementById("ampm");
    hEl = date.getHours();
    mEl = date.getMinutes();
    sEl = date.getSeconds();
    hRotation= 30*hEl + mEl/2;
    mRotation= 6*mEl;
    sRotation= 6* sEl;
    hour.style.transform= `rotate(${hRotation}deg) `;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    if(hEl>12){
        ampm.innerHTML= "PM";
    
    

}
    
}, 1000);