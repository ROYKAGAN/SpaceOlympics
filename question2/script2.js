function checkInput(){

    var password = document.getElementById("sample").value;

    if (password == 11){
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 

        link.rel = 'stylesheet';
        link.href = 'correct.css';
        
        head.appendChild(link);

        alert("כל הכבוד")
        //next  q:
        window.location.pathname = "/fibonacciProject/spirala/q3.html";
    }

    else{
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 

        link.rel = 'stylesheet';
        link.href = 'incorrect.css';
        
        head.appendChild(link);
    }

    document.getElementById("sample").value = ""
}

function goToPass(){
    window.location.pathname = "/fibonacciProject/question2/password.html";
}

function backToQ(){
    window.location.pathname = "/fibonacciProject/question2/index2.html";
}