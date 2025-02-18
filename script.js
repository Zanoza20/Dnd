function showDetails(section) {
  document.getElementById('initial-buttons').style.display = 'none';
  document.getElementById('details-buttons').style.display = 'block';
  document.getElementById('back-button').style.display = 'block';
}

function showAdventures() {
  document.getElementById('details-buttons').style.display = 'none';
  document.getElementById('adventures-buttons').style.display = 'block';
}

function showCharacters() {
  document.getElementById('details-buttons').style.display = 'none';
  document.getElementById('characters-buttons').style.display = 'block';
}

function showNPC() {
  document.getElementById('characters-buttons').style.display = 'none';
  document.getElementById('npc-buttons').style.display = 'block';
}

function goBack() {
  if (document.getElementById('npc-buttons').style.display === 'block') {
    document.getElementById('npc-buttons').style.display = 'none';
    document.getElementById('characters-buttons').style.display = 'block';
  } else if (document.getElementById('characters-buttons').style.display === 'block') {
    document.getElementById('characters-buttons').style.display = 'none';
    document.getElementById('details-buttons').style.display = 'block';
  } else if (document.getElementById('adventures-buttons').style.display === 'block') {
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
