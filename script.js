document.getElementById("temperature").addEventListener("click", function()
{
    let celsius = parseFloat(document.getElementById("celsius").value)
    if (!isNaN(celsius))
    {
        let fahrenheit = (celsius * 9 / 5) + 32
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    }
    else{
        alert("Enter a valid value first");
    }
})

document.getElementById("weight").addEventListener("click", function()
{
    let kilo = parseFloat(document.getElementById("kilo").value)
    if (!isNaN(kilo))
    {
        let pounds = kilo * 2.205
        document.getElementById("pounds").value = pounds.toFixed(3);
    }
    else{
        alert("Enter a valid value first");
    }
})

document.getElementById("distance").addEventListener("click", function()
{
    let km = parseFloat(document.getElementById("km").value)
    if (!isNaN(km))
    {
        let miles = (km / 1.609) 
        document.getElementById("miles").value = miles.toFixed(3);
    }
    else{
        alert("Enter a valid value first");
    }
})