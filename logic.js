$(document).ready(function () {

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAnkPIzEiHJ6Qd6-lhbBFFtrbp4A8K1urI",
    authDomain: "timesheet-9e7c0.firebaseapp.com",
    databaseURL: "https://timesheet-9e7c0.firebaseio.com",
    projectId: "timesheet-9e7c0",
    storageBucket: "",
    messagingSenderId: "653254569801"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


 database.ref().on("child_added", function(snapshot) {
    var row = $("<tr>");
    var namedata = $("<td>");
    var roledata = $("<td>");
    var datedata = $("<td>");
    var ratedata = $("<td>");

    var name = snapshot.val().name.trim();
    var role = snapshot.val().role.trim();
    var date = snapshot.val().date.trim();
    var rate = snapshot.val().rate.trim();

    namedata.text(name);
    roledata.text(role);
    datedata.text(date);
    ratedata.text(rate);

    row.append(namedata, roledata, datedata, ratedata);

    $("#employee-table > tbody").append(row);

 })


    $("#submitBtn").click(function (e) {

        e.preventDefault();
    
        var row = $("<tr>");
        var namedata = $("<td>");
        var roledata = $("<td>");
        var datedata = $("<td>");
        var ratedata = $("<td>");
    
        var name = $("#name-input").val().trim();
        var role = $("#role-input").val().trim();
        var date = $("#date-input").val().trim();
        var rate = $("#rate-input").val().trim();


    
        $("#employee-table > tbody").append(row);

        database.ref().push({
            name: name,
            role: role,
            date: date,
            rate: rate
        })
    
    });

           


})



