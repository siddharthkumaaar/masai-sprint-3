//alert("Welcome")
var from_currencies = document.getElementById("from_currencies")
var to_currencies = document.getElementById("to_currencies")
var amt = document.getElementById("amt")
var btn = document.getElementById("btn")
var down = document.getElementById("down")

function converter()
{
    var xhr = new XMLHttpRequest()
    var url = "http://apilayer.net/api/"
    var access_key = "?access_key=010aa391f3a5a3b5ea69c3c53d07d66f"
    var end_point = "live"
    //?from=EUR&to=GBP&amount=100 
    xhr.open("GET",url+end_point+access_key+"&source="+from_currencies.value+"&currencies="+to_currencies.value)
    xhr.send()
    xhr.onload = function(){
        var response = JSON.parse(this.response)
        var fmt = from_currencies.value+to_currencies.value
        var rate = response.quotes[fmt]

        var opt = rate * amt.value
        var prnt = document.createElement('h1')
        prnt.textContent = opt +" "+to_currencies.value
        down.append(prnt)
        //console.log(opt)
        //console.log(response)
    }
    //alert(from_currencies.value)
}

btn.addEventListener('click',converter)