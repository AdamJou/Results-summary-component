function getData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let sum = 0;
      for (let i = 0; i <= data.length - 1; i++) {
        const spanElement = document.getElementById(`${i + 1}`);
        spanElement.textContent = data[i].score;
        sum += data[i].score;
      }
      const resultElement = document.getElementById("result");
      resultElement.textContent = sum / 4;
    });
}
