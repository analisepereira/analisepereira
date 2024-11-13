document.addEventListener('DOMContentLoaded', function() {
    // Work 3.png (far-left-image)
    const farLeftImage = document.querySelector('.far-left-image');
    const hoverTextDiv = document.createElement('div');
    
    hoverTextDiv.style.position = 'absolute';
    hoverTextDiv.style.left = '34%';
    hoverTextDiv.style.top = '170px';
    hoverTextDiv.style.width = '430px';
    hoverTextDiv.style.height = '260px';
    hoverTextDiv.style.display = 'flex';
    hoverTextDiv.style.alignItems = 'center';
    hoverTextDiv.style.justifyContent = 'center';
    hoverTextDiv.style.color = '#C2B59B';
    hoverTextDiv.style.fontFamily = 'Kefa';
    hoverTextDiv.style.fontSize = '35px';
    hoverTextDiv.style.fontWeight = '470';
    hoverTextDiv.style.opacity = '0';
    hoverTextDiv.style.pointerEvents = 'none';
    hoverTextDiv.textContent = 'Paintings';

    farLeftImage.parentNode.insertBefore(hoverTextDiv, farLeftImage.nextSibling);

    farLeftImage.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        hoverTextDiv.style.opacity = '1';
    });

    farLeftImage.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        hoverTextDiv.style.opacity = '0';
    });

    // Work 4.png (second-image)
    const secondImage = document.querySelector('.second-image');
    const hoverTextDiv2 = document.createElement('div');
    
    hoverTextDiv2.style.position = 'absolute';
    hoverTextDiv2.style.left = '-2%';
    hoverTextDiv2.style.top = '170px';
    hoverTextDiv2.style.width = '430px';
    hoverTextDiv2.style.height = '260px';
    hoverTextDiv2.style.display = 'flex';
    hoverTextDiv2.style.alignItems = 'center';
    hoverTextDiv2.style.justifyContent = 'center';
    hoverTextDiv2.style.color = '#C2B59B';
    hoverTextDiv2.style.fontFamily = 'Kefa';
    hoverTextDiv2.style.fontSize = '35px';
    hoverTextDiv2.style.fontWeight = '470';
    hoverTextDiv2.style.opacity = '0';
    hoverTextDiv2.style.pointerEvents = 'none';
    hoverTextDiv2.textContent = 'Programming';

    secondImage.parentNode.insertBefore(hoverTextDiv2, secondImage.nextSibling);

    secondImage.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        hoverTextDiv2.style.opacity = '1';
    });

    secondImage.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        hoverTextDiv2.style.opacity = '0';
    });

    // Work 5.png (third-image)
    const thirdImage = document.querySelector('.third-image');
    const hoverTextDiv3 = document.createElement('div');
    
    hoverTextDiv3.style.position = 'absolute';
    hoverTextDiv3.style.left = '70%';
    hoverTextDiv3.style.top = '170px';
    hoverTextDiv3.style.width = '430px';
    hoverTextDiv3.style.height = '260px';
    hoverTextDiv3.style.display = 'flex';
    hoverTextDiv3.style.alignItems = 'center';
    hoverTextDiv3.style.justifyContent = 'center';
    hoverTextDiv3.style.color = '#C2B59B';
    hoverTextDiv3.style.fontFamily = 'Kefa';
    hoverTextDiv3.style.fontSize = '35px';
    hoverTextDiv3.style.fontWeight = '470';
    hoverTextDiv3.style.opacity = '0';
    hoverTextDiv3.style.pointerEvents = 'none';
    hoverTextDiv3.textContent = 'Experience';

    thirdImage.parentNode.insertBefore(hoverTextDiv3, thirdImage.nextSibling);

    thirdImage.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        hoverTextDiv3.style.opacity = '1';
    });

    thirdImage.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        hoverTextDiv3.style.opacity = '0';
    });

    // Work 6.png (fourth-image)
    const fourthImage = document.querySelector('.fourth-image');
    const hoverTextDiv4 = document.createElement('div');
    
    hoverTextDiv4.style.position = 'absolute';
    hoverTextDiv4.style.left = '-2%';
    hoverTextDiv4.style.top = '450px';
    hoverTextDiv4.style.width = '430px';
    hoverTextDiv4.style.height = '260px';
    hoverTextDiv4.style.display = 'flex';
    hoverTextDiv4.style.alignItems = 'center';
    hoverTextDiv4.style.justifyContent = 'center';
    hoverTextDiv4.style.color = '#C2B59B';
    hoverTextDiv4.style.fontFamily = 'Kefa';
    hoverTextDiv4.style.fontSize = '35px';
    hoverTextDiv4.style.fontWeight = '470';
    hoverTextDiv4.style.opacity = '0';
    hoverTextDiv4.style.pointerEvents = 'none';
    hoverTextDiv4.textContent = 'Digital work';

    fourthImage.parentNode.insertBefore(hoverTextDiv4, fourthImage.nextSibling);

    fourthImage.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        hoverTextDiv4.style.opacity = '1';
    });

    fourthImage.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        hoverTextDiv4.style.opacity = '0';
    });

    // Work 7.png (fifth-image)
    const fifthImage = document.querySelector('.fifth-image');
    const hoverTextDiv5 = document.createElement('div');
    
    hoverTextDiv5.style.position = 'absolute';
    hoverTextDiv5.style.left = '34%';
    hoverTextDiv5.style.top = '450px';
    hoverTextDiv5.style.width = '430px';
    hoverTextDiv5.style.height = '260px';
    hoverTextDiv5.style.display = 'flex';
    hoverTextDiv5.style.alignItems = 'center';
    hoverTextDiv5.style.justifyContent = 'center';
    hoverTextDiv5.style.color = '#C2B59B';
    hoverTextDiv5.style.fontFamily = 'Kefa';
    hoverTextDiv5.style.fontSize = '35px';
    hoverTextDiv5.style.fontWeight = '470';
    hoverTextDiv5.style.opacity = '0';
    hoverTextDiv5.style.pointerEvents = 'none';
    hoverTextDiv5.textContent = 'Journals';

    fifthImage.parentNode.insertBefore(hoverTextDiv5, fifthImage.nextSibling);

    fifthImage.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        hoverTextDiv5.style.opacity = '1';
    });

    fifthImage.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        hoverTextDiv5.style.opacity = '0';
    });

    // Work 8.png (sixth-image)
    const sixthImage = document.querySelector('.sixth-image');
    const hoverTextDiv6 = document.createElement('div');
    
    hoverTextDiv6.style.position = 'absolute';
    hoverTextDiv6.style.left = '70%';
    hoverTextDiv6.style.top = '450px';
    hoverTextDiv6.style.width = '430px';
    hoverTextDiv6.style.height = '260px';
    hoverTextDiv6.style.display = 'flex';
    hoverTextDiv6.style.alignItems = 'center';
    hoverTextDiv6.style.justifyContent = 'center';
    hoverTextDiv6.style.color = '#C2B59B';
    hoverTextDiv6.style.fontFamily = 'Kefa';
    hoverTextDiv6.style.fontSize = '35px';
    hoverTextDiv6.style.fontWeight = '470';
    hoverTextDiv6.style.opacity = '0';
    hoverTextDiv6.style.pointerEvents = 'none';
    hoverTextDiv6.textContent = 'Sketches';

    sixthImage.parentNode.insertBefore(hoverTextDiv6, sixthImage.nextSibling);

    sixthImage.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        hoverTextDiv6.style.opacity = '1';
    });

    sixthImage.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        hoverTextDiv6.style.opacity = '0';
    });
    
    // Click events for navigation
    farLeftImage.addEventListener('click', function() {
        window.location.href = 'paintings.html';
    });

    secondImage.addEventListener('click', function() {
        window.location.href = 'pro.html';
    });

    thirdImage.addEventListener('click', function() {
        window.location.href = 'exp.html';
    });

    fourthImage.addEventListener('click', function() {
        window.location.href = 'digi.html';
    });

    fifthImage.addEventListener('click', function() {
        window.location.href = 'jo.html';
    });

    sixthImage.addEventListener('click', function() {
        window.location.href = 'sketch.html';
    });

    document.querySelector('.image1').addEventListener('click', function() {
        window.location.href = 'aboutme.html';
    });

    document.querySelector('.top-left-image').addEventListener('click', function() {
        window.location.href = 'index.html';

    });

    document.querySelector('.image3').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });

    // Image hover effects
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
   
    // Top left image hover effect
    document.querySelector('.top-left-image').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.1s ease';
    });
    
    document.querySelector('.top-left-image').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});