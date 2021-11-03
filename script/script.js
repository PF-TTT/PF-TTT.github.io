// Couleur du stylo
var cont = 0
var penColor="black"
var st = false
var couleurJ1
var couleurJ2
var pNum = 0
var dNum = 0
var opp = 0
var sym = ""
var color = ""
var jun = 0
var jdeux = 0

function debut(){
  cont = 0
  var retart = true
  while (retart==true){
    couleurJ1 = prompt("Quel couleur veut-tu? (orange ou noir)")
    if (couleurJ1==="orange" || "o"){
      couleurJ2 = "black"
      couleurJ1 = "orange"
      cont = cont+1
      retart = false
  } else if (couleurJ1==="noir" || "n"){
      couleurJ2 = "orange"
      couleurJ1 = "black"
      cont = cont+1
      retart = false
  } else{
    alert("Variable invalid")
  }}
  color = couleurJ1
  if (cont==1){
  question()
  }
}



function setPixelColor(pixel){
  pixel.style.backgroundColor = penColor;
  cont = cont+1
  
  setTimeout(function () {
    tourr()
  }, 500);
}
function tourr(){
  if (cont==2){
    question()
  } else if (cont==3){
    question()
  }else if (cont==4){
    question()
  }else if (cont==5){
    question()
  }else if (cont==6){
    question()
  }else if (cont==7){
    question()
  }else if (cont==8){
    question()
  }else if (cont==9){
    question()
  }}

function setPenColor(pen){
  penColor=pen;
}

//Code pour demander au joueur quel couleur il veux


// Bouton de réinitialisation
function reste(){
  var temporaire = document.getElementById('pixel1').innerHTML = pixel1.style.backgroundColor= "transparent" 
  var temporaire = document.getElementById('pixel2').innerHTML = pixel2.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel3').innerHTML = pixel3.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel4').innerHTML = pixel4.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel5').innerHTML = pixel5.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel6').innerHTML = pixel6.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel7').innerHTML = pixel7.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel8').innerHTML = pixel8.style.backgroundColor= "transparent"
  var temporaire = document.getElementById('pixel9').innerHTML = pixel9.style.backgroundColor= "transparent"
  cont = 1
  
  var gagnant = prompt("Quel joueur a gagner?(1 ou 2)?")
  if (gagnant==1){
    jun = jun + 1
    parseInt(jun)
    point1.innerHTML = jun
  } else if (gagnant==2){
    jdeux = jdeux + 1
    parseInt(jdeux)
    point2.innerHTML = jdeux
  }

}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function question(){
  pNum = getRandomInt(10)
  dNum = getRandomInt(10)
  opp = getRandomInt(2)
  if (opp==0){
    sym = "+"
    var rep = pNum + dNum
  } else if (opp==1){
    sym = "-"
    var rep = pNum - dNum
  } else if (opp==2){
    sym = "*"
    var rep = pNum * dNum
  } else if (opp==3){
    sym = "/"
    var rep = pNum / dNum
  } else if (opp==4){
    sym = "%"
    var rep = pNum % dNum
  }
  var entre = prompt("Qu'est-ce que " + pNum + "" + sym + "" + dNum + "?")
  if (entre==rep){
    alert("Correct!\n" + "Jouez votre tour...")
    penColor = color
    if (color=="orange"){
      color = "black"
    } else if (color=="black"){
      color = "orange"
    }
    
  } else{
    alert("Incorrect!\n" + "Passer votre tour...")
    if (color=="orange"){
      color = "black";
    } else if (color=="black"){
      color = "orange"
    }
    cont = cont+1
  }
}
