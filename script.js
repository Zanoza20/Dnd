function showDetails(section) {
  document.getElementById('initial-buttons').style.display = 'none';
  document.getElementById('details-buttons').style.display = 'block';
  document.getElementById('back-button').style.display = 'block';
}

function showAdventures() {
  document.getElementById('details-buttons').style.display = 'none';
  document.getElementById('adventures-buttons').style.display = 'block';
}

function goBack() {
  if (document.getElementById('adventures-buttons').style.display === 'block') {
    document.getElementById('adventures-buttons').style.display = 'none';
    document.getElementById('details-buttons').style.display = 'block';
  } else {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('initial-buttons').style.display = 'block';
    document.getElementById('back-button').style.display = 'none';
  }
}

// Назначаем обработчик события для кнопки "Назад"
document.getElementById('back-button').addEventListener('click', goBack);
