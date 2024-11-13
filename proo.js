document.addEventListener('DOMContentLoaded', function() {
    // Image click handlers for navigation
    document.querySelector('.image1').addEventListener('click', function() {
        window.location.href = 'aboutme.html';
    });

    document.querySelector('.image2').addEventListener('click', function() {
        window.location.href = 'mywork.html';
    });

    document.querySelector('.image3').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });

    document.querySelector('.top-left-image').addEventListener('click', function() {
        window.location.href = 'index.html';
    });


    // Make images appear clickable
    document.querySelectorAll('.image1, .image2, .image3').forEach(image => {
        image.style.cursor = 'pointer';
    });

    // Image 1 hover effects
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
    
    // Image 2 hover effects
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
    
    // Image 3 hover effects
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

    // Text click handlers for navigation
    document.querySelector('.text1').addEventListener('click', function() {
        window.location.href = 'aboutme.html';
    });

    document.querySelector('.text2').addEventListener('click', function() {
        window.location.href = 'mywork.html';
    });

    document.querySelector('.text3').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });

    // Make text clickable areas appear as clickable
    document.querySelectorAll('.text1, .text2, .text3').forEach(text => {
        text.style.cursor = 'pointer';
    });

    // Top left image (work 2.png) hover effect
    document.querySelector('.top-left-image').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.1s ease';
    });
    
    document.querySelector('.top-left-image').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});