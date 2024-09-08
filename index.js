
fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
  .then((response) => response.json())
  .then(getTable);

function getTable(heroes) {
 let  superhero = heroes;

  let tbody = document.querySelector("tbody");
  superhero.forEach((element) => {
    let row = `
    <tr>
    <td><img src="${element.images.xs}" alt="icon" ></td>
    <td>${element.name}</td>
    <td>${element.biography.fullName}</td>
    <td>${element.powerstats}</td>
    <td>${element.appearance.race}</td>
    <td>${element.appearance.gender}</td>
    <td>${element.appearance.height}</td>
    <td>${element.appearance.weight}</td>
    <td>${element.biography.placeOfBirth}</td>
    <td>${element.biography.alignment}</td>
</tr>`;
    tbody.innerHTML += row;
  });
}
