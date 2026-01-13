// ================================
// 福島DXミートアップ2026 LP Scripts
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll(
        '.section-title, .intro-content, .problem-box, .concept-inner, ' +
        '.program-item, .speaker-card, .outline-table, .cta-inner'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-target');
        observer.observe(el);
    });

    // Add CSS for animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-target {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .program-item.animate-target {
            transition-delay: calc(var(--index, 0) * 0.1s);
        }
        
        .speaker-card.animate-target {
            transition-delay: calc(var(--index, 0) * 0.1s);
        }
    `;
    document.head.appendChild(style);

    // Set animation delays for program items
    document.querySelectorAll('.program-item').forEach((item, index) => {
        item.style.setProperty('--index', index);
    });

    // Set animation delays for speaker cards
    document.querySelectorAll('.speaker-card').forEach((card, index) => {
        card.style.setProperty('--index', index);
    });

    // Floating CTA visibility
    const floatingCta = document.querySelector('.floating-cta');
    const ctaSection = document.querySelector('.cta');
    
    if (floatingCta && ctaSection) {
        window.addEventListener('scroll', function() {
            const ctaRect = ctaSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Hide floating CTA when main CTA section is visible
            if (ctaRect.top < windowHeight && ctaRect.bottom > 0) {
                floatingCta.style.transform = 'translateY(100%)';
            } else {
                floatingCta.style.transform = 'translateY(0)';
            }
        });
        
        floatingCta.style.transition = 'transform 0.3s ease';
    }

    // Console welcome message
    console.log('%c福島DXミートアップ2026', 'color: #E85A71; font-size: 24px; font-weight: bold;');
    console.log('%c2026年2月24日（火）15:30-17:00 @ キョウワグループ・テルサホール', 'color: #58C9B9; font-size: 14px;');
});
