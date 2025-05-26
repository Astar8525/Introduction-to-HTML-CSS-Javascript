document.getElementById('recommendation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.getElementById('new-rec');
  const text = input.value.trim();

  if (text) {
    const newRec = document.createElement('div');
    newRec.className = 'recommendation';
    newRec.textContent = text;

    document.getElementById('recommendation-list').appendChild(newRec);
    input.value = '';

    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
});
