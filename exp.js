document.addEventListener('DOMContentLoaded', function() {
    // Exp 1
    const exp1 = document.querySelector('.exp1');
    const expText1 = document.createElement('div');
    expText1.style.position = 'absolute';
    expText1.style.left = '240px';
    expText1.style.top = '400px';
    expText1.style.transform = 'translate(-50%, -50%)';
    setupHoverText(exp1, expText1, 'issue 4');

    // Exp 2
    const exp2 = document.querySelector('.exp2');
    const expText2 = document.createElement('div');
    expText2.style.position = 'absolute';
    expText2.style.left = '635px';
    expText2.style.top = '400px';
    expText2.style.transform = 'translate(-50%, -50%)';
    setupHoverText(exp2, expText2, 'issue 7');

    // Exp 3
    const exp3 = document.querySelector('.exp3');
    const expText3 = document.createElement('div');
    expText3.style.position = 'absolute';
    expText3.style.left = '1005px';
    expText3.style.top = '400px';
    expText3.style.transform = 'translate(-50%, -50%)';
    setupHoverText(exp3, expText3, 'issue 9');

    // Exp 4
    const exp4 = document.querySelector('.exp4');
    const expText4 = document.createElement('div');
    expText4.style.position = 'absolute';
    expText4.style.left = '240px';
    expText4.style.top = '870px';
    expText4.style.transform = 'translate(-50%, -50%)';
    setupHoverText(exp4, expText4, 'issue 9');

    // Exp 5
    const exp5 = document.querySelector('.exp5');
    const expText5 = document.createElement('div');
    expText5.style.position = 'absolute';
    expText5.style.left = '635px';
    expText5.style.top = '870px';
    expText5.style.transform = 'translate(-50%, -50%)';
    setupHoverText(exp5, expText5, ' issue 8');

    // Exp 6
    const exp6 = document.querySelector('.exp6');
    const expText6 = document.createElement('div');
    expText6.style.position = 'absolute';
    expText6.style.left = '1005px';
    expText6.style.top = '870px';
    expText6.style.transform = 'translate(-50%, -50%)';
    setupHoverText(exp6, expText6, 'issue 6');

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
        const text = this.parentElement.querySelector('.text1');
        text.style.transform = 'scale(1.1)';
        text.style.transition = 'transform 0.3s ease';
        
    });
    
    document.querySelector('.image1').addEventListener('mouseout', function() {
        this.style.opacity = '1';
        const text = this.parentElement.querySelector('.text1');
        text.style.transform = 'scale(1)';
    });
    
    document.querySelector('.image2').addEventListener('mouseover', function() {
        this.style.opacity = '0.3';
        const text = this.parentElement.querySelector('.text2');
        text.style.transform = 'scale(1.1)';
        text.style.transition = 'transform 0.3s ease';
    });
    
    document.querySelector('.image2').addEventListener('mouseout', function() {
        this.style.opacity = '1';
        const text = this.parentElement.querySelector('.text2');
        text.style.transform = 'scale(1)';
    });
    
    document.querySelector('.image3').addEventListener('mouseover', function() {
        this.style.opacity = '0.3';
        const text = this.parentElement.querySelector('.text3');
        text.style.transform = 'scale(1.1)';
        text.style.transition = 'transform 0.3s ease';
    });
    
    document.querySelector('.image3').addEventListener('mouseout', function() {
        this.style.opacity = '1';
        const text = this.parentElement.querySelector('.text3');
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