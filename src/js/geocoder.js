document.getElementById("process-btn").addEventListener("click", function () {
  const addresses = document.getElementById("addresses").value.split("\n").filter(addr => addr.trim() !== "");
  const resultsTableBody = document.querySelector("#results-table tbody");

  // Очистка предыдущих результатов
  resultsTableBody.innerHTML = "";

  // Проверка подключения API
  if (typeof ymaps === 'undefined') {
    alert("Не удалось подключить API Яндекс.Карт. Пожалуйста, повторите попытку.");
    localStorage.removeItem("yandex-api-key");
    window.location.href = "index.html";
  } 

  // Проверка наличия адресов
  if (addresses.length === 0) {
    alert("Пожалуйста, введите хотя бы один адрес.");
    return;
  }

  // Обработка адресов
  const geocodesList = [];
  const originalOrderGeocodesList = [];
  const promises = addresses.map((address, index) => {
    const searchAddress = address.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return ymaps.geocode(searchAddress).then(
      (res) => {
        const coordinates = res?.geoObjects?.get(0)?.geometry?.getCoordinates();
        if (coordinates) {
          geocodesList.push({ index:index+1, address, lat: coordinates[0], lon: coordinates[1] });
        } else {
          geocodesList.push({ index:index+1, address, lat: "none", lon: "none" });
        }
      },
      (err) => {
        geocodesList.push({ index:index+1, address, lat: "none", lon: "none" });
        console.error(`Ошибка геокодирования для адреса: ${address}`, err);
      }
    );
  });

  // Вывод результатов
  Promise.all(promises).then(() => {
    geocodesList.sort((a, b) => {
      return a.index - b.index;
    })
    geocodesList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.index}</td>
        <td>${item.address}</td>
        <td>${item.lat}</td>
        <td>${item.lon}</td>
      `;
      resultsTableBody.appendChild(row);
    });
  });

});


document.getElementById("logout-btn").addEventListener("click", function () {
  
  // Сохраняем ключ в localStorage и переходим на страницу обработки
  localStorage.removeItem("yandex-api-key");
  window.location.href = "index.html";
});