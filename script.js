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
  document.getElementById('details-buttons').style.display = 'none';
  if (currentSection === 'Ферон') {
    document.getElementById('characters-buttons-feron').style.display = 'block';
  } else if (currentSection === 'Расколотые земли') {
    document.getElementById('characters-buttons-rascol').style.display = 'block';
  } else if (currentSection === 'Мир катаклизма') {
    document.getElementById('characters-buttons-cataclysm').style.display = 'block';
  }
}

function showNPC(world) {
  if (world === 'Ферон') {
    document.getElementById('characters-buttons-feron').style.display = 'none';
    document.getElementById('npc-buttons-feron').style.display = 'block';
  }
  // Добавь аналогичное для других миров, если потребуется
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

function showArtifacts() {
  if (currentSection === 'Ферон') {
    document.getElementById('details-buttons').style.display = 'none';
    document.getElementById('artifacts-buttons-feron').style.display = 'block';
  }
}

function openDocument(docName) {
  const docPath = `docs/${currentSection}/${docName}.docx`;
  window.location.href = docPath;
}

function goBack() {
  const sections = [
    'details-buttons',
    'characters-buttons-feron',
    'characters-buttons-rascol',
    'characters-buttons-cataclysm',
    'npc-buttons-feron',
    'adventures-buttons',
    'plot-buttons-feron',
    'factions-buttons-feron',
    'places-buttons-feron',
    'country-people-buttons',
    'artifacts-buttons-feron',
  ];
  sections.forEach((section) => (document.getElementById(section).style.display = 'none'));

  if (currentSection) {
    document.getElementById('details-buttons').style.display = 'block';
  } else {
    document.getElementById('initial-buttons').style.display = 'block';
    document.getElementById('back-button').style.display = 'none';
  }
}

document.getElementById('back-button').addEventListener('click', goBack);

function openDocument(docName) {
  const docPath = `Ферон/${docName}.docx`;
  window.location.href = docPath;
}
