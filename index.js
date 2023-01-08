var sira=true;
var hamle;
var kare;
var kareler=[];
var kareler2=[];
var kareler3=[];
var sayac=0;
function kontrol() {
        kareler=document.getElementsByTagName('h1');
        console.log(kareler);
        for (var a = 0; a < kareler.length; a++) {
              kareler2[a]=kareler[a].innerHTML;
        }
        console.log(kareler2);
        // for (var a in kareler2) {
        //   console.log(kareler2[a]);
        //       if(kareler2[a]=="X"){
        //         console.log("1");
        //         if (kareler2[a+1]=="X") {
        //           console.log("2");
        //           if (kareler2[a+2]=="X") {
        //             console.log("3");
        //               document.getElementsByClassName('table').style.display="none";
        //               document.getElementById('message').innerHTML="Kazandın";
        //           }
        //         }
        //       }
        // }
        kareler3[0]=kareler2.slice(0,3);
        kareler3[1]=kareler2.slice(3,6);
        kareler3[2]=kareler2.slice(6,9);
        console.log(kareler3);

        for (var a = 0; a < kareler3.length; a++) {
          if(kareler3[a][0]==kareler3[a][1] && kareler3[a][1]==kareler3[a][2]){
            if (kareler3[a][0]=="X") {
              document.getElementById('table').style.display="none";
              document.getElementById('message').innerHTML="Kazandın";
              console.log("Kazandın");
            }
            else if (kareler3[a][0]=="O") {
              document.getElementById('table').style.display="none";
              document.getElementById('message').innerHTML="Kaybettin";
              console.log("Kaybettin");
            }
          }
        }
        for (var a = 0; a < kareler3.length; a++) {
          if(kareler3[0][a]==kareler3[1][a] && kareler3[1][a]==kareler3[2][a]){
            if (kareler3[0][a]=="X") {
              document.getElementById('table').style.display="none";
              document.getElementById('message').innerHTML="Kazandın";
              console.log("Kazandın");
            }
            else if (kareler3[0][a]=="O") {
              document.getElementById('table').style.display="none";
              document.getElementById('message').innerHTML="Kaybettin";
              console.log("Kaybettin");
            }
          }
        }
        if(kareler3[0][0]==kareler3[1][1] && kareler3[1][1]==kareler3[2][2]){
          if (kareler3[0][0]=="X") {
            document.getElementById('table').style.display="none";
            document.getElementById('message').innerHTML="Kazandın";
            console.log("Kazandın");
          }
          else if (kareler3[0][0]=="O") {
            document.getElementById('table').style.display="none";
            document.getElementById('message').innerHTML="Kazandın";
            console.log("Kazandın");
          }
        }
        else if (kareler3[0][2]==kareler3[1][1] && kareler3[1][1]==kareler3[2][0]) {
          if (kareler3[0][2]=="X") {
            document.getElementById('table').style.display="none";
            document.getElementById('message').innerHTML="Kazandın";
            console.log("Kazandın");
          }
          else if (kareler3[0][2]=="O") {
            document.getElementById('table').style.display="none";
            document.getElementById('message').innerHTML="Kaybettin";
            console.log("Kaybettin");
          }
        }

}
function isaret(x) {
      if(sira && x.innerHTML=="-"){
        x.innerHTML="X";
        kontrol();
        document.getElementById('message').innerHTML="Sıra Onda";
        sira=false;
        var i=true;
        if(sayac<4){
          while (i) {
            var sayi=Math.floor(Math.random() * 10);
            if (sayi<=9 && sayi>=1) {
                  kare=document.getElementById(String(sayi)).innerHTML;
                  if (kare=="-") {
                        hamle=document.getElementById(String(sayi)).innerHTML="O";
                        document.getElementById('message').innerHTML="Sıra Sende";
                        i=false;

                  }
            }
          }
        kontrol()
        sayac++;
        sira=true;

        }
      }
}
