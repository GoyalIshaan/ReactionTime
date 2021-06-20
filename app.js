var keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y','z',
 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'M', 'N', 'O', 'p', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z',
 '@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', '>','', '(', ')', '<']

var time =[1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]

function keyGiver(){
    keyIndex = Math.floor(Math.random()*(keys.length));
    return keys[keyIndex];
}

function timeGiver(){
    timeIndex = Math.floor(Math.random()*(time.length));
    console.log(time[timeIndex]);
    return time[timeIndex];
};

var start = 0

function checker(){
    var timeOut = timeGiver();
    setTimeout(function(){ 

        var pressKey = keyGiver();
        document.getElementById("item").innerHTML = pressKey;

        document.addEventListener("keydown", function(event){
            var end = new Date().getTime();
            var time = end - start ;
            time = time - timeOut;
            if(event.key == pressKey){
                document.getElementById("sucess").innerHTML = "You pressed the key in "+ time + " milliseconds.";    
                pressKey = "" 
                document.getElementById("item").innerHTML = pressKey;
            }
        });
     }, timeOut);
}


document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("again").innerHTML = '( If You Want To Try It Out Again Press The Start Button Again )';
    document.getElementById("wait").innerHTML = 'The key you have to press will be appearing automatically';
    document.getElementById("sucess").innerHTML = '';
    
    start = new Date().getTime();
    checker();
    
});
