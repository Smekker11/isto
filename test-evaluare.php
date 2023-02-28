<!DOCTYPE html>
<html>
<head>
	<title>Testul de evaluare al lectiei interactive "Cubul Egiptean"</title>
</head>
<body>

	<h1>Testul de evaluare al lectiei interactive "Cubul Egiptean"</h1>
    <h3>1 Punct din Oficiu</h3>
    <?php 
    error_reporting(E_ALL ^ E_WARNING);
    $nota = 1;
    $q1a=$_GET["q1"];
    $q2a=$_GET["q2"];
    $q3a=$_GET["q3"];
    $q4a=$_GET["q4"];
    $q5a=$_GET["q5"];
    $q6a=$_GET["q6"];
    $q7a=$_GET["q7"];
    $q8a=$_GET["q8"];
    $q9a=$_GET["q9"];
    $q1r1="fata, chip";
    $q1r2="picior, talpa"; 
    $q1r3="mana, palma"; 
    $q2r1="Tragedii si necazuri"; 
    $q2r2="Recolta buna intr-un an"; 
    $q2r3="Viata si Imortalitatea";
    $q3r1="Ra";
    $q3r2="Isis";
    $q3r3="Anubis";  
    $q4r1="John Henri";
    $q4r2="Howard Carter";
    $q4r3="Jeaquin Schutz-Mueller";
    $q5r1="10 Kilograme";
    $q5r2="2,5 Kilograme";
    $q5r3="O Tona";
    $q6r1="Un iepure auriu";
    $q6r2="Intruchiparea luminii solare";
    $q6r3="Un om cu cap de sacal";
    $q7r1="Cifra araba 8";
    $q7r2="Crucea crestina";
    $q7r3="Swastika nazista";
    $q8r1="Piramidele din Giza";
    $q8r2="Big Ben";
    $q8r3="Zalau";
    $q9r1="Protectie si putere regala";
    $q9r2="Calauza pentru marinari";
    $q9r3="Seceta";
    ?>
    <h3 style="color: orange;">Nota: <?php
    if(isset($_GET['q1'])) {
        if($q1a==$q1r1){
          $nota=$nota+1;  
        }
        if($q2a==$q2r3){
          $nota=$nota+1;  
        }
        if($q3a==$q3r2){
          $nota=$nota+1;  
        }
        if($q4a==$q4r2){
          $nota=$nota+1;  
        }
        if($q5a==$q5r1){
          $nota=$nota+1;  
        }
        if($q6a==$q6r3){
          $nota=$nota+1;  
        }
        if($q7a==$q7r2){
          $nota=$nota+1;  
        }
        if($q8a==$q8r1){
          $nota=$nota+1;  
        }
        if($q9a==$q9r1){
            $nota=$nota+1;  
        }
        echo $nota;
    } 
    ?></h3>

	<form action="test-evaluare.php" method="get">
            <!--intrebarea 1-->
            <label for="q1">Ce inseamna prefixul "Ho" din numele lui Horus?</label><br>
			<input type="radio" id="q1r1" name="q1" value="<? echo $q1r1;?>" required>
			<label for="q1r1"><? echo $q1r1;?></label><br>
			<input type="radio" id="q1r2" name="q1" value="<? echo $q1r2;?>" required>
			<label for="q1r2"><? echo $q1r2;?></label><br>
			<input type="radio" id="q1r3" name="q1" value="<? echo $q1r3;?>" required>
			<label for="q1r3"><? echo $q1r3;?></label><br>
            <h1 style="color: red;" ><? if($q1a != `$q1r1`){ echo "Ai ales: $q1a, raspunsul corect era: $q1r1."; } ?></h1>
            <!--intrebarea 2-->
            <label for="q2">Ce simboliza Ankh-ul?</label><br>
			<input type="radio" id="q2r1" name="q2" value="<? echo $q2r1;?>" required>
			<label for="q2r1"><? echo $q2r1;?></label><br>
			<input type="radio" id="q2r2" name="q2" value="<? echo $q2r2;?>" required>
			<label for="q2r2"><? echo $q2r2;?></label><br>
			<input type="radio" id="q2r3" name="q2" value="<? echo $q2r3;?>" required>
			<label for="q2r3"><? echo $q2r3;?></label><br>
            <h1 style="color: red;" ><? if($q2a != `$q2r3`){ echo "Ai ales: $q2a, raspunsul corect era: $q2r3."; } ?></h1>
            <!--intrebarea 3-->
            <label for="q3">Cine l-a nascut pe Horus?</label><br>
			<input type="radio" id="q3r1" name="q3" value="<? echo $q3r1;?>" required>
			<label for="q3r1"><? echo $q3r1;?></label><br>
			<input type="radio" id="q3r2" name="q3" value="<? echo $q3r2;?>" required>
			<label for="q3r2"><? echo $q3r2;?></label><br>
			<input type="radio" id="q3r3" name="q3" value="<? echo $q3r3;?>" required>
			<label for="q3r3"><? echo $q3r3;?></label><br>
            <h1 style="color: red;" ><? if($q3a != `$q3r3`){ echo "Ai ales: $q3a, raspunsul corect era: $q3r2."; } ?></h1>
            <!--copypaste safety buffer-->
            <!--copypaste safety buffer-->
            <!--copypaste safety buffer-->
            <!--intrebarea 4-->
            <label for="q4">Cine a descoperit masca lui Tutankhamon?</label><br>
			<input type="radio" id="q4r1" name="q4" value="<? echo $q4r1;?>" required>
			<label for="q4r1"><? echo $q4r1;?></label><br>
			<input type="radio" id="q4r2" name="q4" value="<? echo $q4r2;?>" required>
			<label for="q4r2"><? echo $q4r2;?></label><br>
			<input type="radio" id="q4r3" name="q4" value="<? echo $q4r3;?>" required>
			<label for="q4r3"><? echo $q4r3;?></label><br>
            <h1 style="color: red;" ><? if($q4a != `$q4r1`){ echo "Ai ales: $q4a, raspunsul corect era: $q4r2."; } ?></h1>
            <!--intrebarea 5-->
            <label for="q5">Cat cantareste masca lui tutankhamon?</label><br>
			<input type="radio" id="q5r1" name="q5" value="<? echo $q5r1;?>" required>
			<label for="q5r1"><? echo $q5r1;?></label><br>
			<input type="radio" id="q5r2" name="q5" value="<? echo $q5r2;?>" required>
			<label for="q5r2"><? echo $q5r2;?></label><br>
			<input type="radio" id="q5r3" name="q5" value="<? echo $q5r3;?>" required>
			<label for="q5r3"><? echo $q5r3;?></label><br>
            <h1 style="color: red;" ><? if($q5a != `$q5r3`){ echo "Ai ales: $q5a, raspunsul corect era: $q5r1."; } ?></h1>
            <!--intrebarea 6-->
            <label for="q6">Cum se descrie infatisarea lui Anubis?</label><br>
			<input type="radio" id="q6r1" name="q6" value="<? echo $q6r1;?>" required>
			<label for="q6r1"><? echo $q6r1;?></label><br>
			<input type="radio" id="q6r2" name="q6" value="<? echo $q6r2;?>" required>
			<label for="q6r2"><? echo $q6r2;?></label><br>
			<input type="radio" id="q6r3" name="q6" value="<? echo $q6r3;?>" required>
			<label for="q6r3"><? echo $q6r3;?></label><br>
            <h1 style="color: red;" ><? if($q6a != `$q6r3`){ echo "Ai ales: $q6a, raspunsul corect era: $q6r3."; } ?></h1>
            <!--intrebarea 7-->
            <label for="q1">Cu ce se aseamana ankh-ul?</label><br>
            <input type="radio" id="q7r1" name="q7" value="<? echo $q7r1;?>" required>
			<label for="q7r1"><? echo $q7r1;?></label><br>
			<input type="radio" id="q7r2" name="q7" value="<? echo $q7r2;?>" required>
			<label for="q7r2"><? echo $q7r2;?></label><br>
			<input type="radio" id="q7r3" name="q7" value="<? echo $q7r3;?>" required>
			<label for="q7r3"><? echo $q7r3;?></label><br>
            <h1 style="color: red;" ><? if($q7a != `$q7r1`){ echo "Ai ales: $q7a, raspunsul corect era: $q7r2."; } ?></h1>
            <!--intrebarea 8-->
            <label for="q8">Face parte din cele 7 minuni ale lumii antice</label><br>
			<input type="radio" id="q8r1" name="q8" value="<? echo $q8r1;?>" required>
			<label for="q8r1"><? echo $q8r1;?></label><br>
			<input type="radio" id="q8r2" name="q8" value="<? echo $q8r2;?>" required>
			<label for="q8r2"><? echo $q8r2;?></label><br>
			<input type="radio" id="q8r3" name="q8" value="<? echo $q8r3;?>" required>
			<label for="q8r3"><? echo $q8r3;?></label><br>
            <h1 style="color: red;" ><? if($q8a != `$q8r3`){ echo "Ai ales: $q8a, raspunsul corect era: $q8r1."; } ?></h1>
            <!--intrebarea 9-->
            <label for="q9">Ce insemna simbolul ochiului lui horus?</label><br>
            <input type="radio" id="q9r1" name="q9" value="<? echo $q9r1;?>" required>
			<label for="q9r1"><? echo $q9r1;?></label><br>
			<input type="radio" id="q9r2" name="q9" value="<? echo $q9r2;?>" required>
			<label for="q9r2"><? echo $q9r2;?></label><br>
			<input type="radio" id="q9r3" name="q9" value="<? echo $q9r3;?>" required>
			<label for="q9r3"><? echo $q9r3;?></label><br>
            <h1 style="color: red;" ><? if($q9a != `$q8r1`){ echo "Ai ales: $q9a, raspunsul corect era: $q9r1."; } ?></h1>
            <input type="submit">
	</form>

</body>
</html>