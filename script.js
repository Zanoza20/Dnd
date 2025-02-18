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

function showNPCDetails(npcName) {
  const npcData = {
    'Аделин': {
      description: 'Аделин — таинственный маг, известный своей склонностью к экспериментам с магией природы.',
      image: 'images/adelin.jpg'
    },
    'Лорд Зуб': {
      description: 'Лорд Зуб — жестокий лидер банды наемников, обитающей в темных лесах Ферона.',
      image: 'images/lord_zub.jpg'
    },
    'Отти': {
      description: 'Отти — старый мудрец, который хранит древние знания о прошлом Ферона.',
      image: 'images/otti.jpg'
    },
    'Кристофер Алая Цепь': {
      description: 'Кристофер Алая Цепь — бывший рыцарь, предавший свой орден ради запретной силы.',
      image: 'images/kristopher.jpg'
    }
  };

  const npc = npcData[npcName];

  if (npc) {
    document.getElementById('npc-name').innerText = npcName;
    document.getElementById('npc-description').innerText = npc.description;
    const npcImage = document.getElementById('npc-image');
    npcImage.src = npc.image;
    npcImage.style.display = 'block';
  }

  document.getElementById('npc-buttons-feron').style.display = 'none';
  document.getElementById('npc-details').style.display = 'block';
}

function goBack() {
  if (document.getElementById('npc-details').style.display === 'block') {
    document.getElementById('npc-details').style.display = 'none';
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

// Назначаем обработчик события для кнопки "Назад"
document.getElementById('back-button').addEventListener('click', goBack);
