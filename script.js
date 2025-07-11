const locationInput = document.getElementById("location");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("deliveryForm").addEventListener("submit", function(e){e.preventDefault(); alert("You submited");

    const data =
    {
        location: locationInput.value,
        date: dateInput.value,
        time: dateInput.value,
        phone: "+27679590274"
    };

    fetch("http://localhost:3000/send-sms",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result=>{
        if(result.success){
            alert("SMS sent!");
        }
        else{
            alert("Failed to send SMS.");
            console.error(result.error);
        }
    })
        });
    });
    