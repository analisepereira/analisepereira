document.addEventListener('DOMContentLoaded', function() {
    // Paint 1 (400x460px at 40,200)
    const paint1 = document.querySelector('.paint1');
    const hoverText1 = document.createElement('div');
    hoverText1.style.position = 'absolute';
    hoverText1.style.left = '240px';  // 40 + (400/2)
    hoverText1.style.top = '430px';   // 200 + (460/2)
    hoverText1.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint1, hoverText1, 'Acrylic');

    // Paint 2 (350x350px at 460,240)
    const paint2 = document.querySelector('.paint2');
    const hoverText2 = document.createElement('div');
    hoverText2.style.position = 'absolute';
    hoverText2.style.left = '635px';  // 460 + (350/2)
    hoverText2.style.top = '415px';   // 240 + (350/2)
    hoverText2.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint2, hoverText2, 'Acrylic');

    // Paint 3 (350x450px at 830,200)
    const paint3 = document.querySelector('.paint3');
    const hoverText3 = document.createElement('div');
    hoverText3.style.position = 'absolute';
    hoverText3.style.left = '1005px';  // 830 + (350/2)
    hoverText3.style.top = '425px';    // 200 + (450/2)
    hoverText3.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint3, hoverText3, 'Acrylic');

    // Paint 4 (400x460px at 40,680)
    const paint4 = document.querySelector('.paint4');
    const hoverText4 = document.createElement('div');
    hoverText4.style.position = 'absolute';
    hoverText4.style.left = '240px';  // 40 + (400/2)
    hoverText4.style.top = '910px';   // 680 + (460/2)
    hoverText4.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint4, hoverText4, 'Acrylic');

    // Paint 5 (390x390px at 40,1160)
    const paint5 = document.querySelector('.paint5');
    const hoverText5 = document.createElement('div');
    hoverText5.style.position = 'absolute';
    hoverText5.style.left = '235px';  // 40 + (390/2)
    hoverText5.style.top = '1355px';  // 1160 + (390/2)
    hoverText5.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint5, hoverText5, 'Gouache');

    // Paint 6 (350x380px at 460,610)
    const paint6 = document.querySelector('.paint6');
    const hoverText6 = document.createElement('div');
    hoverText6.style.position = 'absolute';
    hoverText6.style.left = '635px';  // 460 + (350/2)
    hoverText6.style.top = '800px';   // 610 + (380/2)
    hoverText6.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint6, hoverText6, 'Acrylic');

    // Paint 7 (450x550px at 460,1000)
    const paint7 = document.querySelector('.paint7');
    const hoverText7 = document.createElement('div');
    hoverText7.style.position = 'absolute';
    hoverText7.style.left = '685px';  // 460 + (450/2)
    hoverText7.style.top = '1275px';  // 1000 + (550/2)
    hoverText7.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint7, hoverText7, 'Gouache');

    // Paint 8 (300x300px at 830,670)
    const paint8 = document.querySelector('.paint8');
    const hoverText8 = document.createElement('div');
    hoverText8.style.position = 'absolute';
    hoverText8.style.left = '980px';  // 830 + (300/2)
    hoverText8.style.top = '820px';   // 670 + (300/2)
    hoverText8.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint8, hoverText8, 'Acrylic');

    // Paint 9 (280x320px at 920,980)
    const paint9 = document.querySelector('.paint9');
    const hoverText9 = document.createElement('div');
    hoverText9.style.position = 'absolute';
    hoverText9.style.left = '1060px';  // 920 + (280/2)
    hoverText9.style.top = '1140px';   // 980 + (320/2)
    hoverText9.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint9, hoverText9, 'Watercolour');

    // Paint 10 (340x270px at 920,1310)
    const paint10 = document.querySelector('.paint10');
    const hoverText10 = document.createElement('div');
    hoverText10.style.position = 'absolute';
    hoverText10.style.left = '1090px';  // 920 + (340/2)
    hoverText10.style.top = '1445px';   // 1310 + (270/2)
    hoverText10.style.transform = 'translate(-50%, -50%)';
    setupHoverText(paint10, hoverText10, 'Gouache');

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

    // Add click events for navigation
    document.querySelector('.image1').addEventListener('click', function() {
        window.location.href = 'aboutme.html';
    });

    document.querySelector('.image2').addEventListener('click', function() {
        window.location.href = 'mywork.html';
    });

    document.querySelector('.image3').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
    
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

    document.querySelector('.top-left-image').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});