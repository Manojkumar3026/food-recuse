// Fetch NGO List
fetch('ngo-list.php')
    .then(response => response.json())
    .then(data => {
        const ngoContainer = document.getElementById('ngoContainer');
        data.forEach(ngo => {
            ngoContainer.innerHTML += `<div class="ngo-item">
                <h3>${ngo.name}</h3>
                <p>${ngo.location}</p>
            </div>`;
        });
    });

// Fetch Hotel List
fetch('hotel-list.php')
    .then(response => response.json())
    .then(data => {
        const hotelContainer = document.getElementById('hotelContainer');
        data.forEach(hotel => {
            hotelContainer.innerHTML += `<div class="hotel-item">
                <h3>${hotel.name}</h3>
                <p>${hotel.location}</p>
            </div>`;
        });
    });

// Handle Registration Form
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('registration.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => {
          alert(data.message);
      });
});