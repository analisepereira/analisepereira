document.addEventListener('DOMContentLoaded', function() {
    function addHoverEffect(element, type, scale = 1.5) {
        if (!element) return;
        
        element.style.transition = 'all 0.2s ease';
        element.style.cursor = 'pointer';
        element.style.transformOrigin = 'left center';

        if (type === 'scale') {
            element.addEventListener('mouseenter', () => element.style.transform = `scale(${scale})`);
            element.addEventListener('mouseleave', () => element.style.transform = 'scale(1)');
        } else if (type === 'opacity') {
            element.addEventListener('mouseenter', () => element.style.opacity = '0.5');
            element.addEventListener('mouseleave', () => element.style.opacity = '1');
        }
    }

    const elements = [
        {
            selector: '.about-image-10', // Instagram
            effect: 'scale',
            click: () => window.open('https://www.instagram.com/analise.pereira/', '_blank')
        },
        {
            selector: '.about-image-9', // LinkedIn
            effect: 'scale',
            click: () => window.open('https://www.linkedin.com/in/analise-pereira-bba8b42b5/', '_blank')
        },
        {
            selector: '.about-image-8', // Pinterest
            effect: 'scale',
            click: () => window.open('https://in.pinterest.com/analiseperiera/', '_blank')
        },
        {
            selector: '.about-image-27', // Work page
            effect: 'opacity',
            click: () => window.location.href = 'mywork.html'
        },
        {
            selector: '.about-image-28', // Contact page
            effect: 'opacity',
            click: () => window.location.href = 'contact.html'
        },
        {
            selector: '.about-image-7', // Home page
            effect: 'scale',
            click: () => window.location.href = 'index.html'
        }
    ];

    elements.forEach(({selector, effect, click}) => {
        const element = document.querySelector(selector);
        if (element) {
            addHoverEffect(element, effect);
            if (click) {
                element.addEventListener('click', click);
            }
        }
    });
});
