document.addEventListener('DOMContentLoaded', function() {
    // Jo 1
    const jo1 = document.querySelector('.jo1');
    const joText1 = document.createElement('div');
    joText1.style.position = 'absolute';
    joText1.style.left = '215px';
    joText1.style.top = '450px';
    joText1.style.transform = 'translate(-50%, -50%)';
    setupHoverText(jo1, joText1, 'gouache');

    // Jo 2
    const jo2 = document.querySelector('.jo2');
    const joText2 = document.createElement('div');
    joText2.style.position = 'absolute';
    joText2.style.left = '615px';
    joText2.style.top = '480px';
    joText2.style.transform = 'translate(-50%, -50%)';
    setupHoverText(jo2, joText2, 'gouache');

    // Jo 3
    const jo3 = document.querySelector('.jo3');
    const joText3 = document.createElement('div');
    joText3.style.position = 'absolute';
    joText3.style.left = '1015px';
    joText3.style.top = '450px';
    joText3.style.transform = 'translate(-50%, -50%)';
    setupHoverText(jo3, joText3, 'gouache');

    // Jo 4
    const jo4 = document.querySelector('.jo4');
    const joText4 = document.createElement('div');
    joText4.style.position = 'absolute';
    joText4.style.left = '215px';
    joText4.style.top = '935px';
    joText4.style.transform = 'translate(-50%, -50%)';
    setupHoverText(jo4, joText4, 'gouache');

    // Jo 5
    const jo5 = document.querySelector('.jo5');
    const joText5 = document.createElement('div');
    joText5.style.position = 'absolute';
    joText5.style.left = '615px';
    joText5.style.top = '935px';
    joText5.style.transform = 'translate(-50%, -50%)';
    setupHoverText(jo5, joText5, 'gouache');

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