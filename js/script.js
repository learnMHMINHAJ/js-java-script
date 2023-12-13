






$(document).ready(function(){
    $('.ques').on('click', function(){
        $('.answ').slideToggle();
    }) 

       //show/hide
       $('#hide').on('click',function(){
                $('#sh_h3').hide();
       });
       $('#show').on('click',function(){
        $('#sh_h3').show();

       });
       $('#togg').on('click',function(){
        $('#sh_h3').toggle('300');

       });
        // alertmessage                                  
        $('button').on( 'click' , function(){
         alert("welcome Bangladesh");
     
        });  
    })
// javascript
    function javaScript(){
        document.getElementById('h_b').innerHTML="welcome ";
    }
// show text 
function showText(){
    document.getElementById('p_h3').innerHTML="8*2";
}

//class name
function cName(){
    document.getElementsByClassName('p')[0].innerHTML="world";
}


//show result
let number1, number2, result;

number1 = 5;
number2 = 3 ;

result = number1 * number2 ;

function showResult(){
    document.getElementById('result').innerHTML=result;
}



//show/hide text
function showText(){
    document.getElementById('tsh').style.display="block";
}
function hideText(){
    document.getElementById('tsh').style.display="none";
}

//show border

function showBorder(){

document.getElementById('sb').style.border="2px solid red";

}



//bulb on/off

function BulbOn(){

document.getElementById('img').src="images/on.gif";

}

function BulbOff(){

document.getElementById('img').src="images/off.gif";

}


//show date
function showDate(){

    document.getElementById('sd').innerHTML=Date();

}



// text change 

function textChange(){

document.getElementById('t_h3').innerHTML="Minhaz Mithu";

}





    
