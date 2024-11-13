document.addEventListener('DOMContentLoaded', function() {
    // Digi 1
    const digi1 = document.querySelector('.digi1');
    const digiText1 = document.createElement('div');
    digiText1.style.position = 'absolute';
    digiText1.style.left = '215px';
    digiText1.style.top = '450px';
    digiText1.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi1, digiText1, 'procreate');

    // Digi 2
    const digi2 = document.querySelector('.digi2');
    const digiText2 = document.createElement('div');
    digiText2.style.position = 'absolute';
    digiText2.style.left = '615px';
    digiText2.style.top = '480px';
    digiText2.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi2, digiText2, 'procreate');

    // Digi 3
    const digi3 = document.querySelector('.digi3');
    const digiText3 = document.createElement('div');
    digiText3.style.position = 'absolute';
    digiText3.style.left = '1015px';
    digiText3.style.top = '450px';
    digiText3.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi3, digiText3, 'procreate');

    // Digi 4
    const digi4 = document.querySelector('.digi4');
    const digiText4 = document.createElement('div');
    digiText4.style.position = 'absolute';
    digiText4.style.left = '215px';
    digiText4.style.top = '935px';
    digiText4.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi4, digiText4, 'procreate');

    // Digi 5
    const digi5 = document.querySelector('.digi5');
    const digiText5 = document.createElement('div');
    digiText5.style.position = 'absolute';
    digiText5.style.left = '250px';
    digiText5.style.top = '1320px';
    digiText5.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi5, digiText5, 'procreate');

    // Digi 6
    const digi6 = document.querySelector('.digi6');
    const digiText6 = document.createElement('div');
    digiText6.style.position = 'absolute';
    digiText6.style.left = '630px';
    digiText6.style.top = '1075px';
    digiText6.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi6, digiText6, 'procreate');

    // Digi 7
    const digi7 = document.querySelector('.digi7');
    const digiText7 = document.createElement('div');
    digiText7.style.position = 'absolute';
    digiText7.style.left = '1015px';
    digiText7.style.top = '920px';
    digiText7.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi7, digiText7, 'procreate');

    // Digi 8
    const digi8 = document.querySelector('.digi8');
    const digiText8 = document.createElement('div');
    digiText8.style.position = 'absolute';
    digiText8.style.left = '990px';
    digiText8.style.top = '1310px';
    digiText8.style.transform = 'translate(-50%, -50%)';
    setupHoverText(digi8, digiText8, 'procreate');

    function setupHoverText(image, textElement, content) {
        textElement.style.color = '#C2B59B';
        textElement.style.fontFamily = 'Kefa';
        textElement.style.fontSize = '35px';
        textElement.style.fontWeight = '470';
        textElement.style.opacity = '0';
        textElement.style.pointerEvents = 'none';
        textElement.style.zIndex = '2';
        textElement.textContent = content;

        image.parentNode.insertBefore(textElement, image.nextSibling);

        image.addEventListener('mouseenter', function() {
            this.style.opacity = '0.3';
            textElement.style.opacity = '1';
        });

        image.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            textElement.style.opacity = '0';
        });
    }
    
    document.querySelector('.image1').addEventListener('mouseover', function() {
        this.style.opacity = '0.3';
        const text = document.querySelector('.text1');
        text.style.transform = 'scale(1.1)';
        text.style.transition = 'transform 0.3s ease';
    });
    
    document.querySelector('.image1').addEventListener('mouseout', function() {
        this.style.opacity = '1';
        const text = document.querySelector('.text1');
        text.style.transform = 'scale(1)';
    });
    
    document.querySelector('.image2').addEventListener('mouseover', function() {
        this.style.opacity = '0.3';
        const text = document.querySelector('.text2');
        text.style.transform = 'scale(1.1)';
        text.style.transition = 'transform 0.3s ease';
    });
    
    document.querySelector('.image2').addEventListener('mouseout', function() {
        this.style.opacity = '1';
        const text = document.querySelector('.text2');
        text.style.transform = 'scale(1)';
    });
    
    document.querySelector('.image3').addEventListener('mouseover', function() {
        this.style.opacity = '0.3';
        const text = document.querySelector('.text3');
        text.style.transform = 'scale(1.1)';
        text.style.transition = 'transform 0.3s ease';
    });
    
    document.querySelector('.image3').addEventListener('mouseout', function() {
        this.style.opacity = '1';
        const text = document.querySelector('.text3');
        text.style.transform = 'scale(1)';
    });
    
    document.querySelector('.top-left-image').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.1s ease';
    });
    
    document.querySelector('.top-left-image').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});