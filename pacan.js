function edulinkflop(){
 window.location.href = "/floppy/index.php"
}
function edulinktest(){
  window.location.href = "https://smekker.go.ro/isto/test-evaluare.php"
}
//
//
//
//
//
//
//
//
var credit = 5000;
var nmiz = 20;
var winsml = new Audio('winsml.mp3');
var winbig = new Audio('winbig.mp3');
var speciala = 0;
function m20(){
 nmiz = 20;
 document.getElementById("miza").innerHTML = "prezicere: 20";
}
function m200(){
 nmiz = 200;
 document.getElementById("miza").innerHTML = "prezicere: 200";
}
function m500(){
 nmiz = 500;
 document.getElementById("miza").innerHTML = "prezicere: 500";
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var nred, nblack, nnimc;
nred = 0;
nblack = 0;
nnimc = 1;
function bublaj(cota){
  var rand = getRndInteger(0,99);
  if(rand<=49&&nblack==1){
    return cota * 2;
  }
  else if(rand>49&&nblack==1){
    return cota * 0;
  }
  if(rand<=99&&rand>49&&nred==1){
    return cota * 2;
  }
  else if(rand<=49&&nred==1){
    return cota * 0;
  }
 }
function pacan() {
//setare la default linii
//
document.getElementById("hr1").style.opacity = 0;
document.getElementById("hr2").style.opacity = 0;
document.getElementById("hr3").style.opacity = 0;
document.getElementById("hr4").style.opacity = 0;
document.getElementById("hr5").style.opacity = 0;
document.getElementById("winpn").style.opacity = 0;
//
// speciala counter
document.getElementById("speciala").innerHTML = speciala;
//
//
var n1,n1,n3,n4,n5,n6,n7,n8,n9,nspec;
var l1,l2,l3,l4,l5,l6,l7,l8,l9;
//1:lamaie
//2:septar
//3:pruna
//4:portocala
//5:cireasa
//val pt caracter
l1 = 0;
l2 = 0;
l3 = 0;
l4 = 0;
l5 = 0;
l6 = 0;
l7 = 0;
l8 = 0;
l9 = 0;
//ducem la 0 val caract
n1 = getRndInteger(0,9);
n2 = getRndInteger(0,9);
n3 = getRndInteger(0,9);
n4 = getRndInteger(0,9);
n5 = getRndInteger(0,9);
n6 = getRndInteger(0,9);
n7 = getRndInteger(0,9);
n8 = getRndInteger(0,9);
n9 = getRndInteger(0,9);
nspec = getRndInteger(0,99);
document.getElementById("rand").innerHTML = nspec;
credit = credit - nmiz;
document.getElementById('credit').innerHTML = credit;
if(nspec==44){
  document.getElementById("a1").src = "speciala.gif";
  document.getElementById("b1").src = "speciala.gif";
  document.getElementById("c1").src = "speciala.gif";
  document.getElementById("a2").src = "speciala.gif";
  document.getElementById("b2").src = "speciala.gif";
  document.getElementById("c2").src = "speciala.gif";
  document.getElementById("a3").src = "speciala.gif";
  document.getElementById("b3").src = "speciala.gif";
  document.getElementById("c3").src = "speciala.gif";
  speciala++; // speciala=speciala+1;
}
else
{
//binbus pt n1
if (n1==1||n1==6){
 document.getElementById("a1").src = "lemon.png";
 l1=1;
}
if(n1==2){
  document.getElementById("a1").src = "seven.png";
  l1=2;
}
if(n1==3||n1==9){
  document.getElementById("a1").src = "plum.png";
  l1=3;
}
if(n1==7||n1==0){
 document.getElementById("a1").src = "orange.jpg";
 l1=4;
}
if(n1==4||n1==5||n1==8){
  document.getElementById("a1").src = "cherry.jpg";
  l1=5;
}
//binbus pt n2
if (n2==1||n2==6){
 document.getElementById("b1").src = "lemon.png";
 l2=1;
}
if(n2==2){
  document.getElementById("b1").src = "seven.png";
  l2=2;
}
if(n2==3||n2==9){
  document.getElementById("b1").src = "plum.png";
  l2=3;
}
if(n2==7||n2==0){
 document.getElementById("b1").src = "orange.jpg";
 l2=4;
}
if(n2==4||n2==5||n2==8){
  document.getElementById("b1").src = "cherry.jpg";
  l2=5;
}
//binbus pt n3
if (n3==1||n3==6){
 document.getElementById("c1").src = "lemon.png";
 l3=1;
}
if(n3==2){
  document.getElementById("c1").src = "seven.png";
  l3=2;
}
if(n3==3||n3==9){
  document.getElementById("c1").src = "plum.png";
  l3=3;
}
if(n3==7||n3==0){
 document.getElementById("c1").src = "orange.jpg";
 l3=4;
}
if(n3==4||n3==5||n3==8){
  document.getElementById("c1").src = "cherry.jpg";
  l3=5;
}
//binbus pt n4
if (n4==1||n4==6){
 document.getElementById("a2").src = "lemon.png";
 l4=1;
}
if(n4==2){
  document.getElementById("a2").src = "seven.png";
  l4=2;
}
if(n4==3||n4==9){
  document.getElementById("a2").src = "plum.png";
  l4=3;
}
if(n4==7||n4==0){
 document.getElementById("a2").src = "orange.jpg";
 l4=4;
}
if(n4==4||n4==5||n4==8){
  document.getElementById("a2").src = "cherry.jpg";
 l4=5;
}
//binbus pt n5
if (n5==1||n5==6){
 document.getElementById("b2").src = "lemon.png";
 l5=1;
}
if(n5==2){
  document.getElementById("b2").src = "seven.png";
 l5=2;
}
if(n5==3||n5==9){
  document.getElementById("b2").src = "plum.png";
  l5=3;
}
if(n5==7||n5==0){
 document.getElementById("b2").src = "orange.jpg";
 l5=4;
}
if(n5==4||n5==5||n5==8){
  document.getElementById("b2").src = "cherry.jpg";
  l5=5;
}
//binbus pt n6
if (n6==1||n6==6){
 document.getElementById("c2").src = "lemon.png";
 l6=1;
}
if(n6==2){
  document.getElementById("c2").src = "seven.png";
  l6=2;
}
if(n6==3||n6==9){
  document.getElementById("c2").src = "plum.png";
 l6=3;
}
if(n6==7||n6==0){
 document.getElementById("c2").src = "orange.jpg";
 l6=4;
}
if(n6==4||n6==5||n6==8){
  document.getElementById("c2").src = "cherry.jpg";
  l6=5;
}
//binbus pt n7
if (n7==1||n7==6){
 document.getElementById("a3").src = "lemon.png";
 l7=1;
}
if(n7==2){
  document.getElementById("a3").src = "seven.png";
  l7=2;
}
if(n7==3||n7==9){
  document.getElementById("a3").src = "plum.png";
  l7=3;
}
if(n7==7||n7==0){
 document.getElementById("a3").src = "orange.jpg";
 l7=4;
}
if(n7==4||n7==5||n7==8){
  document.getElementById("a3").src = "cherry.jpg";
  l7=5;
}
//binbus pt n8
if (n8==1||n8==6){
 document.getElementById("b3").src = "lemon.png";
 l8=1;
}
if(n8==2){
  document.getElementById("b3").src = "seven.png";
  l8=2;
}
if(n8==3||n8==9){
  document.getElementById("b3").src = "plum.png";
  l8=3;
}
if(n8==7||n8==0){
 document.getElementById("b3").src = "orange.jpg";
 l8=4;
}
if(n8==4||n8==5||n8==8){
  document.getElementById("b3").src = "cherry.jpg";
  l8=5;
}
//binbus pt n9
if (n9==1||n9==6){
 document.getElementById("c3").src = "lemon.png";
 l9=1;
}
if(n9==2){
  document.getElementById("c3").src = "seven.png";
  l9=2;
}
if(n9==3||n9==9){
  document.getElementById("c3").src = "plum.png";
  l9=3;
}
if(n9==7||n9==0){
 document.getElementById("c3").src = "orange.jpg";
 l9=4;
}
if(n9==4||n9==5||n9==8){
  document.getElementById("c3").src = "cherry.jpg";
  l9=5;
}
//LINII OPACITATE
//orizontala rosie 1
var dub3 = nmiz * bublaj(3);
var dub100 = nmiz * bublaj(100);
var dub4 = nmiz * bublaj(4);
var dub2 = nmiz * bublaj(2);
var cota3 = nmiz * 3;
var cota100 = nmiz * 100;
var cota4 = nmiz * 4;
var cota2 = nmiz * 2;
if(l1==l2&&l2==l3){
  document.getElementById("hr1").style.opacity = 1;
  if (l1==1){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l1==2){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub100;
      if(dub100!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota100;
    }
  }
  if (l1==3){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l1==4){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub4;
      if(dub4!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota4;
    }
  }
  if (l1==5){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub2;
      if(dub2!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota4;
    }
  }
}
//orizontala albastra 2
if(l4==l5&&l5==l6){
  document.getElementById("hr2").style.opacity = 1;
  if (l4==1){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l4==2){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub100;
      if(dub100!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota100;
    }
  }
  if (l4==3){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l4==4){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub4;
      if(dub4!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota4;
    }
  }
  if (l4==5){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub2;
      if(dub2!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota2;
    }
  }
}
//orizontala verde 3
if(l7==l8&&l8==l9){
  document.getElementById("hr3").style.opacity = 1;
  if (l7==1){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l7==2){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub100;
      if(dub100!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota100;
    }
  }
  if (l7==3){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l7==4){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub4;
      if(dub4!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota4;
    }
  }
  if (l7==5){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub2;
      if(dub2!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota2;
    }
  }
}
//DIAGONALE!!!!
//diagonala galbena 4
if(l1==l5&&l5==l9){
  document.getElementById("hr4").style.opacity = 1;
  if (l1==1&&l5==1){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l1==2&&l5==2){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub100;
      if(dub100!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota100;
    }
  }
  if (l1==3&&l5==3){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l1==4&&l5==4){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub4;
      if(dub4!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota4;
    }
  }
  if (l1==5&&l5==5){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub2;
      if(dub2!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota2;
    }
  }
}
//diagonala roz 5
if(l7==l5&&l5==l3){
  document.getElementById("hr5").style.opacity = 1;
  if (l7==1&&l5==1){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l7==2&&l5==2){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub100;
      if(dub100!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota100;
    }
  }
  if (l7==3&&l5==3){
    winbig.play();
    if(nnimc==0){
      credit=credit+dub3;
      if(dub3!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota3;
    }
  }
  if (l7==4&&l5==4){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub4;
      if(dub4!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota4;
    }
  }
  if (l7==5&&l5==5){
    winsml.play();
    if(nnimc==0){
      credit=credit+dub2;
      if(dub2!=0){
      document.getElementById("winpn").style.opacity = 1;
      }
    }
    else{
      credit=credit+cota2;
    }
  }
}
}
}
function fred(){
  nred = 1;
  nblack = 0;
  nnimc = 0;
  document.getElementById("lred").style.opacity = 1;
  document.getElementById("lblack").style.opacity = 0;
  document.getElementById("lnimc").style.opacity = 0;
}
function fblack(){
  nred = 0;
  nblack = 1;
  nnimc = 0;
  document.getElementById("lred").style.opacity = 0;
  document.getElementById("lblack").style.opacity = 1;
  document.getElementById("lnimc").style.opacity = 0;
}
function fnimc(){
  nred = 0;
  nblack = 0;
  nnimc = 1;
  document.getElementById("lred").style.opacity = 0;
  document.getElementById("lblack").style.opacity = 0;
  document.getElementById("lnimc").style.opacity = 1;
}