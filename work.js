//alert("Welcome")
var from_currencies = document.getElementById("from_currencies")
var to_currencies = document.getElementById("to_currencies")
var amt = document.getElementById("amt")
var btn = document.getElementById("btn")
var down = document.getElementById("down")
var hstory = document.getElementById("history")

var usdinr = document.getElementById("usdinr")
var usdjpy = document.getElementById("usdjpy")
var usdaud = document.getElementById("usdaud")
var usdeur = document.getElementById("usdeur")
var usdgbp = document.getElementById("usdgbp")

var from_date = document.getElementById("from_dt")
var to_date = document.getElementById("to_dt")
var usdinr1 = document.getElementById("usdinr1")
var dt = document.getElementById("dt")



window.addEventListener('load',function(){
    var xhr = new XMLHttpRequest()
    var url = "http://apilayer.net/api/"
    var access_key = "?access_key=010aa391f3a5a3b5ea69c3c53d07d66f"
    var end_point1 = "live"
    var end_point2 = "historical"
    //?from=EUR&to=GBP&amount=100 
    xhr.open("GET",url+end_point1+access_key+"&currencies=INR,EUR,JPY,AUD,GBP")
    xhr.send()
    xhr.onload = function(){
        var response = JSON.parse(this.response)
        console.log(response)
        // var fmt = from_currencies.value+to_currencies.value
         //var rate1 = response.quotes[fmt]

        // var opt = rate * amt.value
        // var prnt = document.createElement('h1')
        // prnt.textContent = opt +" "+to_currencies.value
        usdinr.append(response.quotes['USDINR'])
        usdjpy.append(response.quotes['USDJPY'])
        usdaud.append(response.quotes['USDAUD'])
        usdeur.append(response.quotes['USDEUR'])
        usdgbp.append(response.quotes['USDGBP'])
        
    }
    
})

function converter()
{
    var xhr = new XMLHttpRequest()
    var url = "http://apilayer.net/api/"
    var access_key = "?access_key=010aa391f3a5a3b5ea69c3c53d07d66f"
    var end_point1 = "live"
    var end_point2 = "historical"
    //?from=EUR&to=GBP&amount=100 
    xhr.open("GET",url+end_point1+access_key+"&source="+from_currencies.value+"&currencies="+to_currencies.value)
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

function getHistory(){
    var months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    var d = new Date()
    var dd = d.getDate()-1
    var mm = months[d.getMonth()]
    var yy = d.getFullYear()
    //alert(yy+"-"+mm+"-"+dd)

    var xhr = new XMLHttpRequest()
    var url = "http://apilayer.net/api/"
    var access_key = "?access_key=010aa391f3a5a3b5ea69c3c53d07d66f"
    var end_point2 = "historical"
    //?from=EUR&to=GBP&amount=100 
    xhr.open("GET",url+end_point2+access_key+"&currencies="+to_currencies.value+"&date="+yy+"-"+mm+"-"+dd)
    xhr.send()
    xhr.onload = function(){
    var response = JSON.parse(this.response) 
    console.log(response)
    
    dt.append(dd+"-"+mm+"-"+yy)
    usdinr1.append(response.quotes['USDINR'])
    }
}

btn.addEventListener('click',function(){converter()})
hstory.addEventListener('click',function(){getHistory()})