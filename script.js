count = 20;
highscore = 0;

number = Math.floor(Math.random() * 20);
function check(){
    let val = Number(document.getElementById("value").value);
    //document.getElementById("random_value").innerHTML = number; 
   
   
    console.log(count);
    
    if(val === number)
    {
    document.getElementById("entered_value").innerHTML = "Correct";
    if(highscore<count)
    document.getElementById("highscore").innerHTML = count; 
    document.body.style.background = "violet";
     
    }
    else if(val > number){
    document.getElementById("entered_value").innerHTML = "High";
    count--;
    document.getElementById("score").innerHTML = count; 
    }
    else if(val < number)
    {
    document.getElementById("entered_value").innerHTML  = "Low";
    count--;
    document.getElementById("score").innerHTML = count; 
    }
    

}
function again(){
    document.getElementById("score").innerHTML = 0;
    count = 20;
    number = Math.floor(Math.random() * 20);
    document.body.style.background = "black";
    document.body.style.color = "burlywood";


}