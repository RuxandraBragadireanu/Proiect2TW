//get

function getImg() {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/imgPortofolio";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            portofolio = JSON.parse(this.responseText);
            showImg(portofolio);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();

}

function showImg(portofolio) {

    portofolio.forEach(function (portofolioImg) {

        var divImg = document.createElement('div');
        document.getElementById("contentP").appendChild(divImg);
        
        var imgs =  document.createElement('img');
        imgs.setAttribute('id', 'img ' + portofolioImg.id);
        imgs.src = portofolioImg.img;
        divImg.appendChild(imgs);

    })
}
if (document.getElementById("portofolio"))
    getImg();

//put

function putImg(newId, img) {
    
    var url = "http://localhost:3000/imgPortofolio";
    var newObj = {};
    newObj.id = newId;
    newObj.img  = img;
    var json = JSON.stringify(newObj);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/' + newObj.id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var newObj = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(newObj);
        } else {
            console.error(newObj);
        }
    }
    xhr.send(json);
}
if (document.getElementById("portofolio")){
    getImg();
    //putImg(10,"../data/9.jpg");
    var x = document.createElement("img");
    x.src = "https://images.unsplash.com/photo-1503581082249-caa7a3866437?dpr=1&auto=format&fit=crop&w=376&h=564&q=60&cs=tinysrgb";
    document.getElementById("contentP").appendChild(x);
    document.getElementById("contentP").removeChild(x);
}


var id=1;
function postMsg() {
    var msg = {};
    msg.id = id;
    msg.name = document.getElementById("formContact").elements[0].value;
    msg.email = document.getElementById("formContact").elements[1].value;
    msg.subject = document.getElementById("formContact").elements[2].value
    msg.message = document.getElementById("formContact").elements[3].value;
    var json = JSON.stringify(msg);
    
    id++;

    var url = "http://localhost:3000/contentMsg";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var msgs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(msgs);
        } else {
            console.error(msgs);
        }
    }
    xhr.send(json);
}


//delete
function deleteMsg( number ) {
    var url = "http://localhost:3000/contentMsg";
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + '/' + number, true);
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(null);
}

//deleteMsg(1);
if (document.getElementById("formButton"))
    document.getElementById("formButton").addEventListener("click", postMsg);    

