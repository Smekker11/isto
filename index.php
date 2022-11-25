<!DOCTYPE html>
<html>
<head>

<title>prezicere straveche</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css">
</head>
<body style="background-color: #dce74b;">
<h1 style="color: #b37a00;">CUBUL EGIPTEAN</h1>
<div id="pacanHUD">
<!--audio-->
<div align="left"><audio controls autoplay>
    <source src="flute.mp3" type="audio/mpeg">
</audio><p id="rand">oki</p></div>
<div id="pacan-container">
<div class="pacan-char" ><img class="pacan-char-img" id="a1" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="b1" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="c1" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="a2" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="b2" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="c2" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="a3" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="b3" src="nimc.jpg"></img></div>
<div class="pacan-char" ><img class="pacan-char-img" id="c3" src="nimc.jpg"></img></div>
</div>
<div class="miza" align="center">
<h2 id="miza">prezicere: 20</h2>
<button type="button" onclick="m20();">prezicere 20</button>
<button type="button" onclick="m200();">prezicere 200</button>
<button type="button" onclick="m500();">prezicere 500</button>
</div>
<div id="score-container">
<div id="score">
<h3 id="speciala-t">Vraji de la zei:</h3>
<h3 id="speciala">0</h3>
</div>
<div id="score"><h3>Puncte spirituale: <p id="credit">5000</p> </h3></div>
</div>
<div id="but-div"><button id="but" type="button" onclick="pacan();">PREZICE!</button></div>
</div>
<!--binbus DU BLAJ-->
<div id="bublajHUD" style="border: 15px solid black;"><div id="dublaj-container">
<div id="dublaj-part"><img id="redcard" src="red-card.png" height="140" width="100"></img></div>
<div id="dublaj-part"><img id="blackcard" src="black-card.png" height="140" width="100"></img></div>
<div id="dublaj-part"><button onclick="fred();">Creatia</button></div>
<div id="dublaj-part"><button onclick="fblack();">Distrugerea</button></div>
<div id="dublaj-part"><img id="lred" src="dublaj-lumin.png" height="20" width="20"></img></div>
<div id="dublaj-part"><img id="lblack" src="dublaj-lumin.png" height="20" width="20"></img></div>
</div>
<div id="dublaj-part"><img id="lnimc" src="dublaj-lumin.png" height="20" width="20"></div>
<div id="dublaj-part"><button onclick="fnimc();">Prezicere Impartiala</button></div>
<div align="center"><img id="winpn" src="win.png" height="40" width="100"></img></div>
<h2 align="center" id="bulacheh2">Mult Noroc!(حظ سعيد!)</h2>
</div>
<!--TEXTUS-->
<div id="textus">
  <h3 class='ht'>Horus,vine de la cuvântul "Ho"- care în traducere liberă înseamnă "față, chip", fiul lui Isis și al lui Osiris, zeu protector al Egiptului, este reprezentat cu cap de șoim.</h3><img class='it' height="100" width="120" src="lemon.png"></img>
  <h3 class='ht'>Ankh este o hieroglifă egipteană, simbol a vieții lungi. Faraonii primeau o amuletă sub formă de ankh la naștere. De asemenea Ankh-ul era folosit pentru protecție împotriva spiritelor rele.</h3><img class='it' height="100" width="120" src="orange.jpg"></img>
  <h3 class='ht'>Masca lui Tutankhamon este o mască de aur a faraonului egiptean Tutankhamon din Dinastia a XVIII-a. A fost descoperită de Howard Carter în 1925 in Valea Regilor.</h3><img class='it' height="100" width="120" src="cherry.jpg"></img>
  <h3 class='ht'>Piramidele din Giza complex de monumente antice, se numără printre cele mai cunoscute piramide din antichitate, ele fiind considerate una dintre cele șapte minuni ale lumii antice.</h3><img class='it' height="100" width="120" src="seven.png"></img>
  <h3 class='ht'>Anubis este denumirea în greaca clasică a zeului egiptean cu cap de șacal asociat mumificării și vieții de apoi. În limba egipteană veche Anubis era cunoscut ca Inpu și protectorul mormintelor.</h3><img class='it' height="100" width="120" src="plum.png"></img>
</div>
<!--iframus-->
<div id="iframus">
<iframe class="ifram" src="https://www.youtube.com/embed/TMzouTzim0o"></iframe>
<h2>Interiorul piramidei din Giza vazut in 360.</h2>
<iframe class="ifram" src="https://www.youtube.com/embed/dz8qoMeNlBs"></iframe>
<h2>Exteriorul piramidei vazuta cu drona.</h2>
</div>
<script src="pacan.js"></script>
<!--bibliografus-->
<div id="bib">
  <h2 class="ht">Bibliografie</h2>
  <h4 class="ht">Tur virtual piramida din giza: https://youtu.be/TMzouTzim0o</h4>
  <h4 class="ht">Piramida vazuta cu drona in 4K: https://youtu.be/dz8qoMeNlBs</h4>
  <h4 class="ht">Toate pozele/pictogramele/imaginile acestui proiect provin de pe Wikipedia si respecta politicile Wikipedia Commons pentru utilizarea materialelor digitale.</h4>
</div>
<div id="hr-container"><hr class="line" id="hr1"><hr class="line" id="hr2"><hr class="line" id="hr3"><hr class="line" id="hr4"><hr class="line" id="hr5"></div>
</body>
</html>
