'use strict';
{

  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });

  }

  const obserer = new IntersectionObserver(callback, {
    threshold:0.3, 
  });

  document.querySelectorAll('.animate').forEach(el => {
    obserer.observe(el);
  });
}