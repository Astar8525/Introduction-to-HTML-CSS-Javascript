document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recommendation-form');
  const input = document.getElementById('new-rec');
  const list = document.getElementById('recommendation-list');
  const popup = document.getElementById('popup');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const newRec = input.value.trim();
    if (newRec) {
      const newDiv = document.createElement('div');
      newDiv.className = 'recommendation';
      newDiv.textContent = newRec;
      list.appendChild(newDiv);
      
      input.value = '';

      // Show the popup
      popup.classList.remove('hidden');
      popup.style.display = 'block';

      setTimeout(() => {
        popup.style.display = 'none';
        popup.classList.add('hidden');
      }, 3000); // Hide after 3 seconds
    }
  });
});

