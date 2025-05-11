
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.onkeydown = function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I" || e.ctrlKey && e.key == "C" || e.ctrlKey && e.key == "V")) {
      return false;
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
      el.style.userSelect = 'none';
    });
  });
  