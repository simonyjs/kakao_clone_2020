var clockStart = setInterval(function () {
  var today = new Date();

  var hh = addZero(today.getHours());
  var mm = addZero(today.getMinutes());
  var ss = addZero(today.getSeconds());

  document.getElementById("hours").innerText = hh;
  document.getElementById("min").innerText = mm;
  document.getElementById("sec").innerText = ss;

  function addZero(num) {
    return num < 10 ? "0" + num : "" + num;
  }
}, 100);
