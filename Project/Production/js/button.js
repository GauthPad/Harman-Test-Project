var listBrand =['LEXUS','AUDI','MAYBACK','FERRARI','TOYOTA'];

function printBtn() {
    for (var i = 0; i < listBrand.length; i++) {
       var btn = document.createElement("button");
       btn.setAttribute("type", "button");
       btn.setAttribute("onclick",click);
       id = 'id' + i;
       btn.onclick = function(event) {
            var text = document.getElementById(event.target.id).innerHTML;
            console.log(text);
        };
       btn.setAttribute("id", id);
       var t = document.createTextNode(listBrand[i]);
       btn.appendChild(t);
       document.body.appendChild(btn);
    }
}

printBtn();

function click(event) {};