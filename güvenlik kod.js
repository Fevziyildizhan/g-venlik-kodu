<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Güvenlik kod üretme</title>
    <style type="text/css">
    #kod{
        width: 130px;
        height: 40px;
        background: #ccc;
        font: 30px tahoma;
        color: #00f;
        text-align: center;

    }
    </style>
</head>
<body>
    

<div id="kod"></div>
<form >

<input type="button" value="değiştir" onclick="koduret()">

</form>

<script type="text/javascript">

function koduret(){
   var kodlar = ' '
    for(let i = 1; i<=6; i++){
        if(Math.round(Math.random())==1)    
      {  kodlar = kodlar +  String.fromCharCode(65+25*Math.random()).toLowerCase()        
    }else if(Math.round(Math.random())==1){
        kodlar = kodlar +  String.fromCharCode(65+25*Math.random()).toUpperCase()

    }
    else{
        kodlar = kodlar + String.fromCharCode(48+9*Math.random())
    }
      
   
   document.getElementById('kod').innerHTML = kodlar
}
}


</script>
</body>
</html>
