const divisions = {
    maharashtra: ["Pune", "Nagpur" , "Nashik", "Aurangabad" , "Amravati" , "Konkan"],
    andhra: ["vijayawada", "Guntur", "kurnool", "viskhapatnam", "Tirupati"],
    punjab: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
    gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    karnataka: ["Bangalore", "Mysuru", "Hubli", "Belgaum", "Mangalore"]
};

const stateSelect = document.getElementById("state");
const divisionSelect = document.getElementById("division");
const output = document.getElementById("output");

stateSelect.addEventListener("change", () => {
    const selectedState = stateSelect.value;

    divisionSelect.innerHTML = `<option value= " ">---Select Division----</option>`;

    if (divisions[selectedState]){
        divisions[selectedState].forEach(division => {
            const option = document.createElement("option");
            option.value = division.toLowerCase();
            option.textContent = division;
            divisionSelect.appendChild(option);
        });
    }
});
document.getElementById("locationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const state = stateSelect.options[stateSelect.selectedIndex].text;
    const division = divisionSelect.options[divisionSelect.selectedIndex].text;
  
    if (state && division && state !== "--Select State--" && division !== "--Select Division--") {
      output.textContent = `You selected: ${state} ➝ ${division}`;
    } else {
      output.textContent = "Please select both state and division.";
    }
  });