


 let humanscore=0;
 let computerscore=0;



function playgame(){

  let ps=document.getElementById("ps")
  let pr=document.getElementById("pr")



 
    for(let i=0; i<5;i++){
      let human=humanchoice();
      let computer=computerchoice();
      // document.getElementById("pc").innerHTML=human;
      // document.getElementById("cc").innerHTML=computer;


  

      human=="rock"&& computer=="scissors"?humanscore+=1:null;
      human=="scissors"&& computer=="rock"?computerscore+=1:null;
      human=="rock"&& computer=="rock"?computerscore+=1:null;

      
      // 2 conditions
      human=="paper"&& computer=="scissors"?computerscore+=2:null;
      human=="scissors"&& computer=="paper"?humanscore+=2:null;
      human=="scissors"&& computer=="scissors"?humanscore+=2:null;

      // 3rd condition
     
      human=="paper"&&computer=="rock"?humanscore+=3 :null;
      human=="rock"&&computer=="paper"?computerscore+=3 :null;
      human=="paper"&&computer=="paper"?humanscore+=3 :null;

      document.getElementById("ps").innerHTML=humanscore;
      document.getElementById("cs").innerHTML=computerscore;


      


  
     if(i==4){
      if(humanscore>computerscore){
        document.getElementById('ma').innerHTML="YOUR WIN"

        document.getElementById("pr").innerHTML='WIN'
        document.getElementById("cr").innerHTML="BETTER LUCK NEXT TIME"
        
      }
      else if(humanscore<computerscore){
        document.getElementById('ma').innerHTML="BETTER LUCK NEXT TIME"

        document.getElementById("pr").innerHTML='BETTER LUCK NEXT TIME'
        document.getElementById("cr").innerHTML='WIN'

        

         
      }
      else if (humanscore==computerscore){
        document.getElementById('ma').innerHTML="MATCH DIE"

        document.getElementById("pr").innerHTML='MATCH DIE'
        document.getElementById("cr").innerHTML='MATCH DIE'

        }
     }


    


    }
}



var count=1;
function humanchoice(){
  
  let c=prompt(`enter the human choice Rock! paper! scissors! ${count}`);
     c=c.toLowerCase()
      
     if(c=="rock" ||c=="paper" ||c=="scissors"){
    
     }
     else{
      alert("enter the valid string")
      humanchoice()
     }
     document.getElementById('pc').innerText=c;
     count++
   return c;
    }

var k=humanchoice;
  

function computerchoice(){
    const a=["rock","paper","scissors"]
    let random=Math.floor(Math.random()*a.length)
       random=a[random]
       document.getElementById('cc').innerText=random;

    return random
}
