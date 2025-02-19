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

function showNPC(world) {
  if (world === 'Ферон') {
    document.getElementById('characters-buttons-feron').style.display = 'none';
    document.getElementById('npc-buttons-feron').style.display = 'block';
  }
}

function showPlot() {
  if (currentSection === 'Ферон') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('plot-buttons-feron').style.display = 'block';
  }
}

function showFactions() {
  if (currentSection === 'Ферон') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('factions-buttons-feron').style.display = 'block';
  }
}

function showPlaces() {
  if (currentSection === 'Ферон') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('places-buttons-feron').style.display = 'block';
  }
}

function showCountry(country) {
  if (country === 'Страна людей') {
    document.getElementById('places-buttons-feron').style.display = 'none';
    document.getElementById('country-people-buttons').style.display = 'block';
  }
}

function openDocument(docName) {
  window.location.href = `Ферон/${docName}.docx`;
}

// Функция для возврата назад
document.getElementById('back-button').addEventListener('click', function() {
  // Возвращаем к меню миров, если мы находимся на экране выбора деталей
  if (document.getElementById('details-buttons').style.display === 'block') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('initial-buttons').style.display = 'block';
    document.getElementById('back-button').style.display = 'none';
  } else {
    // Закрываем все контейнеры, кроме меню деталей
    document.querySelectorAll('.container').forEach(container => {
      if (container.style.display === 'block' && container.id !== 'details-buttons') {
        container.style.display = 'none';
      }
    });
    document.getElementById('details-buttons').style.display = 'block';
  }
});
