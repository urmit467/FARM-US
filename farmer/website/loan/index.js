let chart;

function avgsur() {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    let c = Number(document.getElementById("input3").value);
    return (a + b + c) / 3;
}

function calloan() {
    let d = Number(document.getElementById("input4").value);
    let e = Number(document.getElementById("input5").value);
    let f = Number(document.getElementById("input6").value);
    let loanAmount = d * (1 + ((e / 100) * f))
    return loanAmount;
}

document.getElementById("btn").addEventListener("click", function () {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    let c = Number(document.getElementById("input3").value);
    let d = Number(document.getElementById("input4").value);
    let e = Number(document.getElementById("input5").value);
    let f = Number(document.getElementById("input6").value);

    if (a === 0 || b === 0 || c === 0 || d === 0 || e === 0 || f === 0) {
        alert("Please enter all the values");
        return;
    }

    const avgs = avgsur();
    const loantotal = calloan();
    const disavg = avgs / 3;
    const disloan = (loantotal) / (f * 12);

    if (avgs / 3 > ((loantotal) / (f * 12) + 2500)) {
        const loanDiv = document.getElementById("loan");
        loanDiv.innerHTML = ""; // clear all content
        loanDiv.innerHTML = "<p >Calculating...</p>";
        loanDiv.style.color = "white";
        loanDiv.style.fontSize = "60px";
        loanDiv.style.marginTop = "200px";
        loanDiv.style.textAlign = "center";
        loanDiv.style.textShadow = "2px 2px 4px #000000";
        document.getElementById("button-section").innerHTML = "";

        setTimeout(() => {
            loanDiv.innerHTML = "";
            const parasec = document.getElementById("button-section");
            parasec.innerHTML = "<p >Your farming surplus is strong — go ahead and invest in your future. 🌾💸</p>";
            parasec.style.fontSize = "24px";
            parasec.style.fontFamily = "cursive";
            parasec.style.color = "white";

            const canvas = document.createElement("canvas");
            canvas.id = "myChart";
            canvas.width = 600;
            canvas.height = 400;
            canvas.style.backgroundColor = "white";

            loanDiv.appendChild(canvas);
            // loanDiv.appendChild(messageDiv);

            const ctx = canvas.getContext("2d");

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Average Surplur/month', 'Loan repayment/month'],
                    datasets: [{
                        label: 'surplus vs loan',
                        data: [disavg, disloan],
                        backgroundColor: ["#2a2a2a", "#333333"]
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: "black",
                                font: {
                                    size: 16,
                                    family: "cursive"

                                }
                            }
                        }
                    }
                }
            });
        }, timeout = 3000);



        // loanDiv.style.display = "flex";
        // loanDiv.style.justifyContent = "center";
        // loanDiv.style.alignItems = "center";
        // loanDiv.style.gap = "50px";

        // const messageDiv = document.createElement("div");
        // messageDiv.style.color = "white";
        // messageDiv.style.fontSize = "24px";
        // messageDiv.style.fontFamily = "cursive";
        // messageDiv.innerHTML = "<p>Your farming surplus is strong — go ahead and invest in your future. 🌾💸</p>";

    } else {
        const loanDiv = document.getElementById("loan");
        // loanDiv.innerHTML = "";
        loanDiv.innerHTML = "<p >Calculating...</p>";
        loanDiv.style.color = "white";
        loanDiv.style.fontSize = "35px";
        loanDiv.style.textAlign = "center";
        setTimeout(() => {
            loanDiv.innerHTML = ""
            const parasec = document.getElementById("button-section");
            parasec.innerHTML = "<p > We ran the numbers, and right now, your crop surplus isn't quite enough to support this loan safely. Taking a loan with such a thin cushion could risk your future harvests.</p>";
            parasec.style.fontSize = "20px";
            parasec.style.fontFamily = "cursive";
            parasec.style.fontStyle = " italic";
            parasec.style.color = "white";
            parasec.style.textAlign = "center";
            parasec.style.marginRight = "250px";
            parasec.style.marginLeft = "250px";

            const canvas = document.createElement("canvas");
            canvas.id = "myChart";
            canvas.width = 400;
            canvas.height = 300;
            canvas.style.backgroundColor = "white";


            loanDiv.appendChild(canvas);

            const ctx = canvas.getContext("2d");

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Average Surplus/month', 'Loan Total/month'],
                    datasets: [{
                        label: 'surplus vs loan',
                        data: [disavg, disloan],
                        backgroundColor: ["#2a2a2a", "#333333"]
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }, 3000);

    }
});

