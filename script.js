let videoHiden;
window.addEventListener("scroll", function fade() {
    const video = document.getElementById("video");
    const scrollPosition = window.scrollY;

    const experience = document.getElementById("EX");
   

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
});



