document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.dropbtn');
    const menu = document.getElementById('dropdownMenu');

    button.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
      if (!e.target.matches('.dropbtn')) {
        menu.style.display = 'none';
      }
    });
  });

