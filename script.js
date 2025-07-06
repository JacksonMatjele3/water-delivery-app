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
    
    console.log(data);
        });
    });
    