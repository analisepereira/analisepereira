document.addEventListener('DOMContentLoaded', function() {
    // Sketch 1
    const sketch1 = document.querySelector('.sketch1');
    const sketchText1 = document.createElement('div');
    sketchText1.style.position = 'absolute';
    sketchText1.style.left = '285px';
    sketchText1.style.top = '400px';
    sketchText1.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch1, sketchText1, 'pencil');

    // Sketch 2
    const sketch2 = document.querySelector('.sketch2');
    const sketchText2 = document.createElement('div');
    sketchText2.style.position = 'absolute';
    sketchText2.style.left = '650px';
    sketchText2.style.top = '350px';
    sketchText2.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch2, sketchText2, 'ink');

    // Sketch 3
    const sketch3 = document.querySelector('.sketch3');
    const sketchText3 = document.createElement('div');
    sketchText3.style.position = 'absolute';
    sketchText3.style.left = '1015px';
    sketchText3.style.top = '400px';
    sketchText3.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch3, sketchText3, 'ink');

    // Sketch 4
    const sketch4 = document.querySelector('.sketch4');
    const sketchText4 = document.createElement('div');
    sketchText4.style.position = 'absolute';
    sketchText4.style.left = '285px';
    sketchText4.style.top = '850px';
    sketchText4.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch4, sketchText4, 'pencil');

    // Sketch 7
    const sketch7 = document.querySelector('.sketch7');
    const sketchText7 = document.createElement('div');
    sketchText7.style.position = 'absolute';
    sketchText7.style.left = '650px';
    sketchText7.style.top = '680px';
    sketchText7.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch7, sketchText7, 'pencil');

    // Sketch 5
    const sketch5 = document.querySelector('.sketch5');
    const sketchText5 = document.createElement('div');
    sketchText5.style.position = 'absolute';
    sketchText5.style.left = '650px';
    sketchText5.style.top = '1000px';
    sketchText5.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch5, sketchText5, 'pencil');

    // Sketch 6
    const sketch6 = document.querySelector('.sketch6');
    const sketchText6 = document.createElement('div');
    sketchText6.style.position = 'absolute';
    sketchText6.style.left = '1015px';
    sketchText6.style.top = '850px';
    sketchText6.style.transform = 'translate(-50%, -50%)';
    setupHoverText(sketch6, sketchText6, 'ink');

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