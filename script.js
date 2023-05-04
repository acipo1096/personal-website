let activeLink;

function changeActiveLink(){
    document.addEventListener('click', function(e){
        activeLink = document.getElementById(e.target.id);
        console.log(activeLink);
        if (activeLink.innerText === "About"){
            activeLink.setAttribute("class","nav-link active");
            document.getElementById('my-work-link').setAttribute("class", "nav-link text-white");
            document.getElementById('contact-link').setAttribute("class", "nav-link text-white");
        }
        else if(activeLink.innerText === "My Work"){
            activeLink.setAttribute("class","nav-link active");
            document.getElementById('about-link').setAttribute("class", "nav-link text-white");
            document.getElementById('contact-link').setAttribute("class", "nav-link text-white");
        }
        else if (activeLink.innerText === "Alexander J. Cipollone"){
            document.getElementById('about-link').setAttribute("class", "nav-link text-white");
            document.getElementById('my-work-link').setAttribute("class", "nav-link text-white");
            document.getElementById('contact-link').setAttribute("class", "nav-link text-white");
        }
        else {
            activeLink.setAttribute("class","nav-link active");
            document.getElementById('about-link').setAttribute("class", "nav-link text-white");
            document.getElementById('my-work-link').setAttribute("class", "nav-link text-white");
        }
    })
}
