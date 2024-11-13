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
            selector: '.about-image-10',
            effect: 'scale',
            click: () => window.open('https://www.instagram.com/analise.pereira/', '_blank')
        },
        // Add these three new elements
        {
            selector: '.about-image-27', // about 20.png
            effect: 'opacity',
            click: () => window.location.href = 'mywork.html'
        },
        {
            selector: '.about-image-28', // about 20 copy.png
            effect: 'opacity',
            click: () => window.location.href = 'contact.html'
        },
        {
            selector: '.about-image-7', // about 4.png
            effect: 'scale',
            click: () => window.location.href = 'index.html'
        }
        // ... rest of your elements
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
