let videoHiden;
window.addEventListener("scroll", function fade() {
    const video = document.getElementById("video");
    let scrollPosition = window.scrollY;

    const experience = document.getElementById("EX");
    const education =  document.getElementById("ED");
    const contactMe =  document.getElementById("CM");

   

    if (scrollPosition > 0 ) {
        video.classList.add("hidden");
        videoHiden=true; 
     
    } else if (scrollPosition === 0) {
        video.classList.remove("hidden");
        videoHiden=false;
        
    }
    if(videoHiden){
        experience.classList.add("showExperience");
        experience.classList.remove("hideExperience");
    }
    else{
        experience.classList.add("hideExperience");
        experience.classList.remove("showExperience");
    }
    if(scrollPosition >= 1750.93310546875){
        education.classList.add("showExperience");
        education.classList.remove("hideExperience");
    }
    else if(scrollPosition<1750.93310546875){
        education.classList.remove("showExperience");
        education.classList.add("hideExperience");
     
    }
    if(scrollPosition >= 2426.888916015625){
        contactMe.classList.add("showExperience");
        contactMe.classList.remove("hideExperience");
    }
    else if(scrollPosition<2426.888916015625){
        contactMe.classList.remove("showExperience");
        contactMe.classList.add("hideExperience");
     
    }
});

function print(){
    const scrollPosition = window.scrollY;
    window.alert(scrollPosition);
}


