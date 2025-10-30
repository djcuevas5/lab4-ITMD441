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
    newButton.style.cssText = `
        background-color: #97fa8eff;
        color: #000000;
        border: 4px solid #000000;
        padding: 12px 24px;
        font-size: 16px;
        border-radious: 8px;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        font-weight: bold;
    `;
    newButton.appendChild(newButton);

    const hero = document.querySelector('#hero');
    if(hero){
        hero.parentNode.insertBefore(newSection,hero.nextSibling);
    }

    const serviceIcons =document.querySelectorAll('#services .material-symbols-outlined');
    serviceIcons.forEach(icon => {
        icon.style.color = '#62b334ff';
    });

    const digitalMarketingIcon = document.querySelector('[data-icon="digital"]');
    if (digitalMarketingIcon) {
        digitalMarketingIcon.textContent = 'ads_click';
    }

    const style = document.createElement('style');
    style.textContent = `
        @media (min-width: 1024px) {
            [data-section="product_cards"] {
                grid-template-columns: repeat(4, 1fr) !important;
            }
        }
    `;
    document.head.appendChild(style);

    const musiciansImg = document.querySelector('img[alt="Musicians"]');
    if (musiciansImg) {
        musiciansImg.src = 'https://picsum.photos/id/453/400/300';
    }
    const copyright = document.querySelector('footer p');
    if (copyright) {
        copyright.textContent = copyright.textContent.replace('2024', '2025');
    }
})();
