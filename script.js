// script.js
document.getElementById('uploadButton').addEventListener('click', function () {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (e) {
  var file = e.target.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function () {
      var memory = {
        image: reader.result,
        datetime: new Date().toLocaleString()
      };
      saveMemory(memory);
    };
    reader.readAsDataURL(file);
  }
});

function saveMemory(memory) {


  console.log(memory);
}


function sendEmailNotification(days) {
  var currentDate = new Date();
  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);

  var timeDiff = targetDate.getTime() - currentDate.getTime();
  var timeDiffInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (timeDiffInDays <= 0) {

    console.log('Sending email notification...');
  } else {
    console.log('Notification will be sent in ' + timeDiffInDays + ' days.');
  }
}

// Example usage: Send email after 7 days
sendEmailNotification(7);
