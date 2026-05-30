/* ========================================
   SCRIPT.JS - INTERAÇÕES DA PÁGINA
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. SCROLL SUAVE PARA ÂNCORAS
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================================
    // 2. ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
    // ========================================
    
    const animatedElements = document.querySelectorAll(
        '.stat-card, .solution-card, .myth-item, .resource-category'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('hidden');
    });
    
    function checkAnimation() {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkAnimation);
    checkAnimation();
    
    // ========================================
    // 3. BOTÃO VOLAR AO TOPO
    // ========================================
    
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================================
    // 4. HEADER MUDA COR AO ROLAR
    // ========================================
    
    const hero = document.querySelector('.hero');
    const originalBackground = hero.style.background;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            hero.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop\') center/cover';
        } else {
            hero.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop\') center/cover';
        }
    });
    
    // ========================================
    // 5. CONTA AS ESTATÍSTICAS
    // ========================================
    
    const stats = document.querySelectorAll('.stat-card .number');
    let counted = false;
    
    function countStats() {
        if (counted) return;
        
        const statsSection = document.querySelector('.stats-grid');
        const sectionTop = statsSection.getBoundingClientRect().top;
        
        if (sectionTop < window.innerHeight - 100) {
            counted = true;
            
            stats.forEach(stat => {
                const target = stat.textContent;
                stat.textContent = '0';
                
                setTimeout(() => {
                    stat.textContent = target;
                }, 500);
            });
        }
    }
    
    window.addEventListener('scroll', countStats);
    
    console.log('🌱 Site Agro Forte carregado com sucesso!');
});

// ========================================
// 6. ALERTA NA SAÍDA (OPCIONAL)
// ========================================

window.addEventListener('beforeunload', function(e) {
    // e.preventDefault();
    // e.returnValue = 'Tem certeza que deseja sair?';
});