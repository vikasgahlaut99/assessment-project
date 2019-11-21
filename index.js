function mocktail() {
    if(document.getElementById("mock-tail").innerHTML == ""){
        document.getElementById("search").innerHTML = "";
        document.getElementById("cock-tail").innerHTML = "";
        document.getElementById("glasses").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("mock-tail").innerHTML = "";
        document.getElementById("cock-tail").innerHTML = "";
        document.getElementById("glasses").innerHTML = "";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            var obj = JSON.parse(this.responseText);
            var i,j;
            for(i = 0; i < 6; i++)
            {
                var div = document.getElementById("mock-tail");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic", true);
    xhttp.send();
}

function cocktail() {
    if(document.getElementById("cock-tail").innerHTML == ""){
        document.getElementById("mock-tail").innerHTML = "";
        document.getElementById("search").innerHTML = "";
        document.getElementById("glasses").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("mock-tail").innerHTML = "";
        document.getElementById("cock-tail").innerHTML = "";
        document.getElementById("glasses").innerHTML = "";
    }
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            var obj = JSON.parse(this.responseText);
            var i,j;
            for(i = 0; i < 6; i++)
            {
                var div = document.getElementById("cock-tail");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", true);
    xhttp.send();
}