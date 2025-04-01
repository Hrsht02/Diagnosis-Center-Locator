const diagnosis = [
        {
            "name": "Redcliffe Labs - Collection Center",
            "address": "Shop No 12, Surya Tower, Bailey Rd, near Paras Hospital, Patna, Bihar",
            "Website": "https://redcliffelabs.com/",
            "phone": "07033420424",
            "mapLink": "https://maps.app.goo.gl/ivAkH3MEvagj1z4E6"
        },
        {
            "name": "Magadh Diagnostic",
            "address": "Vidhyapeth Market, Bailey Rd, opp. Paras High Hospital Gate, Patna, Bihar",
            "Website": "NA",
            "phone": "06122295637",
            "mapLink": "https://maps.app.goo.gl/6GapDGk7cQqQQsP7A"
        }
        // Add more diagnostic centers here...
    ];
    
    const searchInput = document.getElementById("searchInput");
    const suggestionsList = document.getElementById("suggestions");
    
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredDiagnosis = diagnosis.filter(
            center =>
                center.name.toLowerCase().includes(query) ||
                center.address.toLowerCase().includes(query)
        );
    
        suggestionsList.innerHTML = ""; // Clear previous suggestions
    
        filteredDiagnosis.forEach(center => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${center.name}</strong><br>
                <small>${center.address}</small><br>
                📞 <strong>${center.phone}</strong><br>
                <button onclick="window.open('${center.Website}', '_blank')">Website</button>
                <button onclick="window.open('${center.mapLink}', '_blank')">Get Directions</button>
            `;
    
            li.addEventListener("click", () => {
                searchInput.value = center.name;
                suggestionsList.innerHTML = ""; // Hide suggestions
            });
    
            suggestionsList.appendChild(li);
        });
    });
    