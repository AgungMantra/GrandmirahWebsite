// ========== Scroll Reveal ==========
ScrollReveal({
    reset: false,
    distance: '10px',
    duration: 1000,
    delay: 600
});
{ scale: 1 }


ScrollReveal().reveal('#Srscale,.Srscale', { scale: 0.85 });
ScrollReveal().reveal('#Srleft' ,{ origin: 'left' });
ScrollReveal().reveal('#Srright' ,{ origin: 'right' });
ScrollReveal().reveal('#Srbottom' ,{ origin: 'bottom' });

