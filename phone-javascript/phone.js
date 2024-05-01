function displayokay(val)
{
    document.getElementById("input-box").value = document.getElementById("input-box").value + val
}

function oncall()
{
    //get a input id 
    let x = document.getElementById("input-box").value
    // write the if and else 
    let text;
    if (isNaN(x) || x < 1000000000 || x > 10000000000){
        text = "wrong Number";
    }
    else {
        text = "calling";
    }
    document.getElementById("demo").innerHTML = text;
}

