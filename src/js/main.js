let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       alert(http.responceText);
    }
};

xhttp.open("GET", "../db/file.json", true);
xhttp.send();