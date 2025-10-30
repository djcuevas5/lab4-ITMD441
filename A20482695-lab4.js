(function() {
    const mainHeadline = document.querySelector('#hero h1');
    if (mainHeadline) {
        mainHeadline.textContent = 'Supercharge Your Brand with Stellar Marketing';
    }
    
    const subHeadline = document.querySelector('#hero p');
    if (subHeadline) {
        subHeadline.innerHTML = '<strong><em>Leverage innovative strategies from Stellar Marketing to make your business shine and succeed.</em></strong>';
    }
    
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'url(https://picsum.photos/id/683/1280/720)';
    }

    const navbar = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (navbar && footer) { 
        navbar.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }

    const newSection = document.createElement('section');
    newSection.style.cssText = 'width: 100%; background-color: #6495ed; padding: 32px 0; text-align: center;';
    const newButton = document.createElement('button');
    newButton.textContent = 'Get Started Now';
    newButton.style.cssText = ''

})();
