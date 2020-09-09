var countIndex = 0;
showCount();

function showCount(){
    var j;
    var count = document.getElementsByClassName("slides");
    for (j=0; j < count.length; j++){
        count[j].style.display = "none";
    }
    countIndex++;
    if (countIndex > count.length){countIndex = 1}
    count[countIndex-1].style.display = "block";
    setTimeout(showCount, 5000);
}