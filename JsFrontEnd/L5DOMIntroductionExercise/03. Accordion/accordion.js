function toggle() {
    let button = document.querySelector("span").textContent;
    if (button === 'More') {
        document.querySelector("span").textContent = "Less";
        document.getElementById('extra').style.display = 'block';
    }else{
        document.querySelector("span").textContent = "More";
        document.getElementById('extra').style.display = 'none';
    }
   
}