
function generateRandomNum()
{
  var dicenum1 = Math.floor(Math.random()*6)+1;
  var dicenum2 = Math.floor(Math.random()*6)+1;

 if(dicenum1!=dicenum2)
 {
  diceRoll(dicenum1);
  diceRoll2(dicenum2);
  winner(dicenum1,dicenum2);
 }
 else
 {
   generateRandomNum();
 }

 console.log(dicenum1);
console.log(dicenum2);

}
 generateRandomNum();






// Roll 2

function diceRoll(number)
{
   if(number==1)
   {
     document.getElementById("1").classList.add("hidden");
     document.getElementById("2").classList.add("hidden");
     document.getElementById("3").classList.add("hidden");
     document.getElementById("4").classList.add("hidden");
     document.getElementById("6").classList.add("hidden");
     document.getElementById("7").classList.add("hidden");
     document.getElementById("8").classList.add("hidden");
     document.getElementById("9").classList.add("hidden");
   }
   else if(number==2)
   {
    document.getElementById("2").classList.add("hidden");
    document.getElementById("3").classList.add("hidden");
    document.getElementById("4").classList.add("hidden");
    document.getElementById("5").classList.add("hidden");
    document.getElementById("6").classList.add("hidden");
    document.getElementById("7").classList.add("hidden");
    document.getElementById("8").classList.add("hidden");
   }
   else if(number==3)
   {
    document.getElementById("2").classList.add("hidden");
    document.getElementById("3").classList.add("hidden");
    document.getElementById("4").classList.add("hidden");
    document.getElementById("6").classList.add("hidden");
    document.getElementById("7").classList.add("hidden");
    document.getElementById("8").classList.add("hidden");
   }
   else if(number==4)
   {
    document.getElementById("2").classList.add("hidden");
    document.getElementById("4").classList.add("hidden");
    document.getElementById("5").classList.add("hidden");
    document.getElementById("6").classList.add("hidden");
    document.getElementById("8").classList.add("hidden");
   }
   else if(number==5)
   {
    document.getElementById("2").classList.add("hidden");
    document.getElementById("4").classList.add("hidden");
    document.getElementById("6").classList.add("hidden");
    document.getElementById("8").classList.add("hidden");
   }
   else if(number==6)
   {
    document.getElementById("2").classList.add("hidden");
    document.getElementById("5").classList.add("hidden");
    document.getElementById("8").classList.add("hidden");
   }
}

// Roll 2

function diceRoll2(number)
{
   if(number==1)
   {
     document.getElementById("01").classList.add("hidden");
     document.getElementById("02").classList.add("hidden");
     document.getElementById("03").classList.add("hidden");
     document.getElementById("04").classList.add("hidden");
     document.getElementById("06").classList.add("hidden");
     document.getElementById("07").classList.add("hidden");
     document.getElementById("08").classList.add("hidden");
     document.getElementById("09").classList.add("hidden");
   }
   else if(number==2)
   {
    document.getElementById("02").classList.add("hidden");
    document.getElementById("03").classList.add("hidden");
    document.getElementById("04").classList.add("hidden");
    document.getElementById("05").classList.add("hidden");
    document.getElementById("06").classList.add("hidden");
    document.getElementById("07").classList.add("hidden");
    document.getElementById("08").classList.add("hidden");
   }
   else if(number==3)
   {
    document.getElementById("02").classList.add("hidden");
    document.getElementById("03").classList.add("hidden");
    document.getElementById("04").classList.add("hidden");
    document.getElementById("06").classList.add("hidden");
    document.getElementById("07").classList.add("hidden");
    document.getElementById("08").classList.add("hidden");
   }
   else if(number==4)
   {
    document.getElementById("02").classList.add("hidden");
    document.getElementById("04").classList.add("hidden");
    document.getElementById("05").classList.add("hidden");
    document.getElementById("06").classList.add("hidden");
    document.getElementById("08").classList.add("hidden");
   }
   else if(number==5)
   {
    document.getElementById("02").classList.add("hidden");
    document.getElementById("04").classList.add("hidden");
    document.getElementById("06").classList.add("hidden");
    document.getElementById("08").classList.add("hidden");
   }
   else if(number==6)
   {
    document.getElementById("02").classList.add("hidden");
    document.getElementById("05").classList.add("hidden");
    document.getElementById("08").classList.add("hidden");
   }
}

// Decide winner
function winner(playear1,playear2)
{
  if(playear1>playear2)
  {
    document.getElementById("winner").textContent=1;
    document.getElementById("flag2").classList.add("hidden");
    document.getElementById("flag1").classList.remove("hidden");
  }
  else 
  {
    document.getElementById("winner").textContent=2;
    document.getElementById("flag1").classList.add("hidden");
    document.getElementById("flag2").classList.remove("hidden");
  }
}