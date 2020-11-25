function fecha() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}
document.getElementById('fecha').innerHTML = fecha();