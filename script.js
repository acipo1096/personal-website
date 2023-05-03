let activeLink = document.getElementById('about-link');
console.log(activeLink.innerText);

function changeActiveLink(){
    if (activeLink.innerText === "About"){
        activeLink.setAttribute("class","nav-link active");
        console.log('Good!')
    }
    else if(activeLink.innerText === "My Work"){
        activeLink.setAttribute("class","nav-link active");
    }
    console.log('Clicked!');
}
