$("#submit").click(function (e) {
  e.preventDefault();
  // loading
  $("#loading").css("display", "flex");

  const arrayData = $("#contact-form-main").serializeArray();
  const data = arrayData.reduce((prev, curr) => {
    prev[curr.name] = curr.value;
    return prev;
  }, {});
  fetch(
    "https://script.google.com/macros/s/AKfycbwcIsJzsj5yBZtSdxOVX67XRZlilzpeLPU22kXHlHeZ1fAr57tRgAZ8rBbBGU6S506D9A/exec",
    {
      redirect: "follow",
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      mode: "no-cors",
      body: JSON.stringify(data),
    }
  )
    .then(() => {
      $("#success").show(1000);
      $("#loading").css("display", "none");
      // trigger confetti
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
      });

      // button animation
      $(this).css("transform", "scale(0.95)");
      setTimeout(() => {
        $(this).css("transform", "scale(1)");
      }, 100);
    })
    .catch(() => {
      $("#loading").css("display", "none");
    });
});
