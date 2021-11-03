// Couleur du stylo
var cont = 0
var penColor="black"
var st = false
var couleurJ1
var couleurJ2


function debut(){
  alert("allo")
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

  if (cont==1){
  question1()
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
    question2()
  } else if (cont==3){
    question3()
  }else if (cont==4){
    question4()
  }else if (cont==5){
    question5()
  }else if (cont==6){
    question6()
  }else if (cont==7){
    question7()
  }else if (cont==8){
    question8()
  }else if (cont==9){
    question9()
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
  var jun = 0
  var jdeux = 0
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





// Questions
function question1(){
  var Q1 = prompt("Qu'est-ce que 11 + 6?")

if (Q1==17) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ1
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question2(){
  var Q2 = prompt("Qu'est-ce que 5 x 3?")

if (Q2==15) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ2
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question3(){
  var Q3 = prompt("Qu'est-ce que 23 - 6?")

if (Q3==17) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ1
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question4(){
  var Q4 = prompt("Qu'est-ce que 15 % 3?")

if (Q4==5) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ2
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question5(){
  var Q5 = prompt("Qu'est-ce que 5 + 3?")

if (Q5==8) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ1
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question6(){
  var Q6 = prompt("Qu'est-ce que 6 % 2?")

if (Q6==3) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ2
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question7(){
  var Q7 = prompt("Qu'est-ce que 10 x 10?")

if (Q7==100) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ1
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question8(){
  var Q8 = prompt("Qu'est-ce que 20 - 10?")

if (Q8==10) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ2
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}

function question9(){
  var Q9 = prompt("Qu'est-ce que 9 + 9")

if (Q9==18) {
  alert("Correct!\n" + "Jouez votre tour...")
  penColor = couleurJ1
  } else {
  alert("Incorrect!\n" + "Passer votre tour...")
  cont = cont+1
  }
}
