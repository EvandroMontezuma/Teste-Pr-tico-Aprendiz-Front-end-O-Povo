document.getElementById("showMoreBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        this.innerText = "Mostrar Menos";
    } else {
        moreInfo.style.display = "none";
        this.innerText = "Mostrar Mais";

        }
    
});
