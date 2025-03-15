$(document).ready(function () {
  // Tạo hiệu ứng cánh hoa rơi
  const roses = [
    "assets/images/roses/rose1.png",
    "assets/images/roses/rose2.png",
    "assets/images/roses/rose3.png",
    "assets/images/roses/rose4.png",
    "assets/images/roses/rose5.png",
    "assets/images/roses/rose6.png",
    "assets/images/roses/rose7.png",
    "assets/images/roses/rose8.png",
    "assets/images/roses/rose9.png",
  ];

  function getRandomRose() {
    const randomIndex = Math.floor(Math.random() * roses.length);
    return roses[randomIndex];
  }

  function getRandomWidth() {
    const min = 20;
    const max = 40;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  $("body").letItSnow({
    quantity: "smooth",

    flake: {
      html: function () {
        const randomRose = getRandomRose();
        return `<img src='${randomRose}' style='width: ${getRandomWidth()}px' />`;
      },
      minSize: 10, // Minimum Flake Size
      maxSize: 30, // Maximum Flake Size
    },
  });
});
