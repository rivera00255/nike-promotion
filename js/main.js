(()=>{

    const introImage = [
        document.querySelector('.intro-img-0'),
        document.querySelector('.intro-img-1'),
        document.querySelector('.intro-img-2')
    ];
    const introText = [
        document.querySelector('.intro-text-0'),
        document.querySelector('.intro-text-1'),
        document.querySelector('.intro-text-2')
    ]

    function scrollPage() {
        for(let i = 0; i < introImage.length; i++) {
            if(introImage[i].getBoundingClientRect().top < window.innerHeight * 0.4) {
                introImage[i].classList.add('show-img');
                introText[i].classList.add('show-text');
            } else {
                introImage[i].classList.remove('show-img');
                introText[i].classList.remove('show-text');
            }
        }
    }

    window.addEventListener('scroll', function(){
        scrollPage();
    });

})();