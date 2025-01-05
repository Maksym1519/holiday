// Проверяем наличие div с ID "map"
document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("map");
  
    if (mapElement) {
      // Центр карты (например, координаты Киева)
      const map = L.map('map').setView([46.434216, 30.722297], 13);
  
      // Добавляем слой карты (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      // Добавляем маркер на карте
      L.marker([46.434216, 30.722297])
        .addTo(map)
        .bindPopup('Ваш офис: Одеса, вул. Ак.Фiлатова, 2')
        .openPopup();
    }
  });
  