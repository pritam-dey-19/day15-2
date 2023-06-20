const catsAPI = "https://api.thecatapi.com/v1/breeds";
const catNamesList = document.getElementById("cat-names-list");

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const catNames = data.map((cat) => cat.name);

    catNames.forEach((catName) => {
      const listItem = document.createElement("li");
      listItem.textContent = catName;
      catNamesList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching cats API:", error);
  });
