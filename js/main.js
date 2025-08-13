// Basic JavaScript functionality for tab switching on the Product & Services page.
// Without using any frameworks or routers, this script enables switching
// between the Product and Consultancy tabs.

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tabs button');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Deactivate all buttons and content panels
      tabButtons.forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));
      // Activate the clicked button
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      // Show the corresponding content panel
      const panel = document.getElementById(tabId);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });
});