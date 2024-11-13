window.addEventListener('load', function() {
    const img = document.querySelector('.about-image-10');
    const img2 = document.querySelector('.about-image-9');
    const img3 = document.querySelector('.about-image-8');
    const about8 = document.querySelector('img[src*="about 8.png"]');
    const about8Copy = document.querySelector('img[src*="about 8 copy.png"]');
    const about9 = document.querySelector('img[src*="about 9.png"]');
    const about4 = document.querySelector('img[src*="about 4.png"]');
    const about20 = document.querySelector('img[src*="about 20.png"]')
    const about20Copy = document.querySelector('img[src*="about 20 copy.png"]')
    
    if (img) {
        img.style.transition = 'transform 0.2s ease';
        img.style.cursor = 'pointer';
        
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.5)';
        });
        
        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });

        img.addEventListener('click', function() {
            window.open('https://www.instagram.com/analise.pereira/', '_blank');
        });
    }

    if (img2) {
        img2.style.transition = 'transform 0.2s ease';
        
        img2.addEventListener('mouseenter', function() {
            img2.style.transform = 'scale(1.5)';
        });
        
        img2.addEventListener('mouseleave', function() {
            img2.style.transform = 'scale(1)';
        });

        img2.addEventListener('click', function() {
            window.open('https://www.linkedin.com/in/analise-pereira-bba8b42b5/', '_blank');
        });
    }

    if (img3) {
        img3.style.transition = 'transform 0.2s ease';
        
        img3.addEventListener('mouseenter', function() {
            img3.style.transform = 'scale(1.5)';
        });
        
        img3.addEventListener('mouseleave', function() {
            img3.style.transform = 'scale(1)';
        });
       
        img3.addEventListener('click', function() {
            window.open('https://in.pinterest.com/analiseperiera/');
        });
    }

    if (about8) {
        about8.style.transition = 'all 0.2s ease';
        
        about8.addEventListener('mouseenter', function() {
            about8.style.opacity = '0.5';
        });
        
        about8.addEventListener('mouseleave', function() {
            about8.style.opacity = '1';
        });
    }

    if (about8Copy) {
        about8Copy.style.transition = 'all 0.2s ease';
        
        about8Copy.addEventListener('mouseenter', function() {
            about8Copy.style.opacity = '0.5';
        });
        
        about8Copy.addEventListener('mouseleave', function() {
            about8Copy.style.opacity = '1';
        });
    }

    if (about9) {
        about9.style.transition = 'all 0.2s ease';
        
        about9.addEventListener('mouseenter', function() {
            about9.style.opacity = '0.5';
        });
        
        about9.addEventListener('mouseleave', function() {
            about9.style.opacity = '1';
        });
    }

    if (about4) {
        about4.style.transition = 'transform 0.2s ease';
        about4.style.cursor = 'pointer';
        
        about4.addEventListener('mouseenter', function() {
            about4.style.transform = 'scale(1.5)';
        });
        
        about4.addEventListener('mouseleave', function() {
            about4.style.transform = 'scale(1)';
        });
       
        about4.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (about20) {
        about20.style.transition = 'all 0.2s ease';
        
        about20.addEventListener('mouseenter', function() {
            about20.style.opacity = '0.5';
        });
        
        about20.addEventListener('mouseleave', function() {
            about20.style.opacity = '1';
        });
    }

    if (about20Copy) {
        about20Copy.style.transition = 'all 0.2s ease';
        
        about20Copy.addEventListener('mouseenter', function() {
            about20Copy.style.opacity = '0.5';
        });
        
        about20Copy.addEventListener('mouseleave', function() {
            about20Copy.style.opacity = '1';
        });
        document.querySelector('img[src*="about 20.png"]').addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
        
        document.querySelector('.about-image-27').addEventListener('click', function() {
            window.location.href = 'mywork.html';
        });
        document.querySelector('.about-image-28').addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
 
    
});