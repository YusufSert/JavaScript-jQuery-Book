(function () {
  var hotel = {
    name: "Park",
    roomRate: 240,
    discount: 15,
    offerPrice: function () {
      var offerRate = this.roomRate * ((100 - this.dicount) / 100);
      return offerRate;
    },
  };

  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById("hotelName");
  roomRate = document.getElementById("roomRate");
  specialRate = document.getElementById("specialRate");

  hotelName.textContent = hotel.name;
  roomRate.textContent = "$" + hotel.roomRate.toFixed(2);
  specialRate.textContent = "$" + hotel.offerPrice();

  var expiryMsg;
  var today;
  var eLEnds;

  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // Add 7 days time(added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }
});