const BG_COLORS = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#8e44ad",
  "#e67e22",
  "#f1c40f",
  "#c0392b",
  "#2c3e50",
];

const getRandomBGColor = () => {
  return BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
};

export { getRandomBGColor };
