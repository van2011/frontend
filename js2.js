// const xhr = new XMLHttpRequest()
// xhr.open("GET", "https://localhost:3000/api/products")
// xhr.send()
// xhr.onload = () => console.log(xhr.response)

fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка при получении данных:', error));

$(document).ready(function () {
$(".jokesCont").append(`
<div class="joke" id="1">
    <p class = "text_joke">${}</p>
    <span class="material-symbols-outlined">thumb_up</span>
    <span class="material-symbols-outlined">thumb_down</span>
</div>
`)
})