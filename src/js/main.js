function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  return randomValue(options);
}