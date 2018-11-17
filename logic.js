$(document).ready(function () {

    $("#add-employee").click(function (e) {

        e.preventDefault();
    
        var row = $("<tr>");
        var namedata = $("<td>");
        var roledata = $("<td>");
        var datedata = $("<td>");
        var ratedata = $("<td>");
    
        var name = $("#name").val().trim();
        var role = $("#role").val().trim();
        var date = $("#date").val().trim();
        var rate = $("#rate").val().trim();
    
        console.log(name);
        namedata.text(name);
        roledata.text(role);
        datedata.text(date);
        ratedata.text(rate);
    
        row.append(namedata, roledata, datedata, ratedata);
    
        $("#employee-table > tbody").append(row);
    
    });

    <script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
        <script>
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
</script>
})



