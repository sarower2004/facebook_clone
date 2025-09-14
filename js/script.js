document.addEventListener('DOMContentLoaded', () => {
      const navButtons = document.querySelectorAll('.nav-btn');
      const pages = document.querySelectorAll('.page');

      function showPageById(pageId, clickedBtn) {
        // hide all pages & remove active from all buttons
        pages.forEach(p => p.classList.remove('visible'));
        navButtons.forEach(b => b.classList.remove('active'));

        // show requested page and mark button active
        const target = document.getElementById(pageId);
        if (target) target.classList.add('visible');
        if (clickedBtn) clickedBtn.classList.add('active');

        // pause/stop any videos on pages that are now hidden
        document.querySelectorAll('video').forEach(v => {
          // if video is not inside the currently visible page, pause it
          if (!v.closest('.visible')) {
            v.pause();
            // v.currentTime = 0; // uncomment if you want to reset to start
          }
        });
      }

      // set default (Home) active on first load
      const defaultPage = 'home';
      showPageById(defaultPage, document.querySelector(`.nav-btn[data-page="${defaultPage}"]`));

      // attach click handlers
      navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          showPageById(btn.dataset.page, btn);
        });
      });
    });