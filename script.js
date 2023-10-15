const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const sound = document.querySelector("#sound");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
    let inputword = document.getElementById("inputWord").value;
    fetch(`${url}${inputword}`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = ` <div class="ms-2 d-flex">
      <h4>${inputword}</h4>
  </div>

  <div class="ms-2">
      <span>${data[0].meanings[0].partOfSpeech}</span>
      <span class="text-secondary">${data[0].phonetic}</span>
      <p class="mt-2">
      ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p>${data[0].meanings[0].definitions[0].example} </p>
  </div>`;
        })
        .catch(() => {
            result.innerHTML = `<h5 class="ms-2">No Results Found.
      </h5>`;
        });
});
