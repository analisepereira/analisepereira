document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', function() {
        const text = this.querySelector('.image-text');
        text.style.transform = 'translateX(-50%) scale(1.2)';
        text.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseout', function() {
        const text = this.querySelector('.image-text');
        text.style.transform = 'translateX(-50%) scale(1)';
    });

    document.querySelector('.sixth-image img').addEventListener('click', function() {
        window.location.href = 'aboutme.html';
    });
   
    document.querySelector('.seventh-image img').addEventListener('click', function() {
        window.location.href = 'mywork.html';
    });

});