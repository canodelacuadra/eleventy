---
layout: template.njk
title: tema01
---
# Tema 01
````js
function fecha() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}
document.getElementById('fecha').innerHTML = fecha();
````