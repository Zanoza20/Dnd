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
  const filePath = `npc Ферон/${npcName}.docx`;

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      return mammoth.extractRawText({ arrayBuffer: buffer });
    })
    .then(result => {
      document.getElementById('npc-buttons-feron').style.display = 'none';

      let npcDetailsDiv = document.getElementById('npc-details');
      npcDetailsDiv.style.display = 'block';
      npcDetailsDiv.innerHTML = `
        <h2>${npcName}</h2>
        <p>${result.value}</p>
      `;
    })
    .catch(error => {
      console.error('Ошибка загрузки файла:', error);
      alert('Не удалось загрузить информацию о персонаже.');
    });
}

function goBack() {
  const npcDetailsDiv = document.getElementById('npc-details');
  if (npcDetailsDiv.style.display === 'block') {
    npcDetailsDiv.style.display = 'none';
    document.getElementById('npc-buttons-feron').style.display = 'block';
  } else if (document.getElementById('npc-buttons-feron').style.display === 'block') {
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
 document.getElementById('back-button').addEventListener('click', goBack);
