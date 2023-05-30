window.addEventListener(
  "load",
  function () {
    document.getElementById("capture").onchange = function (evt) {
      var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

      // FileReader support
      if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
          document.getElementById("PredictedPicture").src = fr.result;
        };
        fr.readAsDataURL(files[0]);
      }
    };

    var button = document.getElementById("button");
    button.addEventListener(
      "click",
      function () {
        const file = document.getElementById("capture").files[0];
        console.log(file);

        // HTTP Post Request
        var URL =
          "https://www.customvision.ai/projects/5dc48009-0177-446d-aa33-ee3870b05aeb#/performance:~:text=https%3A//southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/5dc48009%2D0177%2D446d%2Daa33%2Dee3870b05aeb/classify/iterations/Iteration2%2DTamurModel/url";
        var xhr = new XMLHttpRequest();

        xhr.open("POST", URL, true);
        xhr.setRequestHeader(
          "Prediction-Key",
          "05960586f4d94ae7bd2f9f4123aa0799"
        );
        xhr.setRequestHeader("Content-Type", "application/json");

        var formData = new FormData();
        formData.append("image", file);
        xhr.send(formData);

        xhr.onreadystatechange = processRequest;

        function processRequest(e) {
          if (xhr.readyState == 4 && xhr.status == 200) {
            // alert(xhr.responseText);
            console.log(typeof xhr.responseText);
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            console.log(json.predictions[0]["probability"]);
            console.log(typeof json);

            var table = document.getElementById("myTable");

            for (var i = json.predictions.length - 1; i >= 0; i--) {
              var row = table.insertRow(1);

              // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);

              // Add some text to the new cells:
              cell1.innerHTML = json.predictions[i]["tagName"];
              cell2.innerHTML = json.predictions[i]["probability"] * 100 + "%";
            }
          }
        }
      },
      false
    );
  },
  false
);
