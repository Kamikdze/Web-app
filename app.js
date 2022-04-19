var lat = '';
var long = '';
var FirstName = '';
var LastName = '';
var LessonName = '';

navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })
  
  function success({ coords }) {
    const { latitude, longitude } = coords
    const position = [latitude, longitude]
    console.log(position)
    lat = coords.latitude;
    long = coords.longitude;
  }
  function error({ message }) {
    console.log(message) 
  }

  function alerted(){
    if ((document.getElementById("FirtsName").value == '') || (document.getElementById("LastName").value == '')){
      alert("Введите имя и фамилию")
    }
    else{
    function onScanSuccess(decodedText) {
      LessonName = decodedText
      FirstName = document.getElementById("FirtsName").value
      LastName = document.getElementById("LastName").value
      html5QrcodeScanner.clear()
      alert("Сканирование завершено");
    }
    
    let html5QrcodeScanner = new Html5QrcodeScanner("reader",
      { fps: 10, qrbox: {width: 250, height: 250} },
      /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess);
  }
}


