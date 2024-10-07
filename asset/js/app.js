var seasons = ["winter","summer","autumn","spring",];
var userInput = prompt("What is your favourite season?(summer winter autumn spring)");
if(userInput === "summer"){ 
document.write(`<div class="card"><div class="image"><img src="summar.gif" alt=""></div><div class="text"><h1>Summer</h1><p>Summer is usually associated with hot, dry weather.The days are longer, and the nights are shorter during this season</p></div></div>`)
}
else if(userInput === "winter"){
    document.write(`<div class="card"><div class="image"><img src="winter.gif" alt=""></div><div class="text"><h1>winter</h1><p>The stillness of the frozen air heightens each of the senses,inspiration.</p></div></div>`)
}
else if(userInput === "spring"){
document.write(`<div class="card"><div class="image"><img src="spring.gif" alt=""></div><div class="text"><h1>spring</h1><p>The spring season is a time of year when the weather starts to change. It is a transition season between the winter and summer seasons <br>The days get longer and nights get shorter, the temperature is milder, and flowers bloom.</p></div></div>`)
}
else if(userInput === "autumn"){
    document.write(`<div class="card"><div class="image"><img src="autumn.gif" alt=""></div><div class="text"><h1>autumn</h1><p>“Leaves are falling, autumn is calling.” “Sweater weather and pumpkin spice make everything nice!” </p></div></div>`)

}else{
    alert("Invalid Season!");
}
document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/autumn-patterned-background_23-2151841182.jpg?ga=GA1.1.1112367912.1720952297&semt=ais_hybrid')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
