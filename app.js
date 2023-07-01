// Получаем блок, в котором будут отображаться фотографии
const photoContainer = document.getElementById('photo-container');
// Выполняем fetch запрос на API
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    // Отображаем только первые 20 фотографий
    const photos = data.slice(0, 20);
    // Создаем HTML элементы для каждой фотографии
    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.thumbnailUrl;
      img.alt = photo.title;
      // Добавляем фотографию в блок
      photoContainer.appendChild(img);
    });
  })
  .catch(error => console.log(error));