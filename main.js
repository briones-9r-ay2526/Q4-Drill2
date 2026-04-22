function checkHeat() {
    
    // Get input values
    let temp = Number(document.getElementById("tempEntry").value);
    let humidity = Number(document.getElementById("humidEntry").value);

    // Calculate heat index
    let heatIndex = temp + (0.33 * humidity) - 4;

    // If/Else checks status

    let status = "";

    if (heatIndex < 28) {
        status = "Comfortable / Cool";
    }

    else if (heatIndex < 33) {
        status = "Warm";
    }

    else if (heatIndex < 38) {
        status = "Hot";
    }

    else if (heatIndex < 42) {
        status = "Very Hot / Caution";
    }

    else {
        status = "Extreme Heat / Danger";
    }

    window.alert(
        "Heat Index: " + heatIndex.toFixed(2) + "°C\nStatus: " + status
    );
}