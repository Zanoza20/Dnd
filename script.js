let currentSection = '';

function showDetails(section) {
  currentSection = section;
  document.getElementById('initial-buttons').style.display = 'none';
  document.getElementById('details-buttons').style.display = 'block';
  document.getElementById('back-button').style.display = 'block';
}

function showAdventures() {
  document.getElementById('details-buttons').style.display = 'none';
  document.getElementById('adventures-buttons').style.display = 'block';
}

function showCharacters() {
  if (currentSection === 'Ферон') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('characters-buttons-feron').style.display = 'block';
  } else if (currentSection === 'Расколотые земли') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('characters-buttons-rascol').style.display = 'block';
  } else if (currentSection === 'Мир катаклизма') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('characters-buttons-cataclysm').style.display = 'block';
  }
}

function showNPC(section) {
  if (section === 'Ферон') {
    document.getElementById('characters-buttons-feron').style.display = 'none';
    document.getElementById('npc-buttons-feron').style.display = 'block';
  }
}

function openDocument(npcName) {
  const filePath = `npc Ферон/${npcName}.word`;
  window.open(filePath, '_blank');
}

function goBack() {
  if (document.getElementById('npc-buttons-feron').style.display === 'block') {
    document.getElementById('npc-buttons-feron').style.display = 'none';
    document.getElementById('characters-buttons-feron').style.display = 'block';
  } else if (document.getElementById('characters-buttons-feron').style.display === 'block') {
    document.getElementById('characters-buttons-feron').style.display = 'none';
    document.getElementById('details-buttons').style.display = 'block';
  } else if (document.getElementById('characters-buttons-rascol').style.display === 'block') {
    document.getElementById('characters-buttons-rascol').style.display = 'none';
    document.getElementById('details-buttons').style.display = 'block';
  } else if (document.getElementById('characters-buttons-cataclysm').style.display === 'block') {
    document.getElementById('characters-buttons-cataclysm').style.display = 'none';
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
