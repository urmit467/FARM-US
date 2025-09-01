let chart = null;


function calculateAverageSurplus() {
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);
    const c = Number(document.getElementById("input3").value);
    return (a + b + c) / 3;
}


function calculateLoanTotal() {
    const principal = Number(document.getElementById("input4").value);
    const annualInterestRate = Number(document.getElementById("input5").value); 
    const durationYears = Number(document.getElementById("input6").value);
    return principal * (1 + (annualInterestRate / 100) * durationYears);
}


document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("btn");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        // Read all input values
        const a = Number(document.getElementById("input1").value);
        const b = Number(document.getElementById("input2").value);
        const c = Number(document.getElementById("input3").value);
        const d = Number(document.getElementById("input4").value);
        const e = Number(document.getElementById("input5").value);
        const f = Number(document.getElementById("input6").value);

      
        if (!a || !b || !c || !d || !e || !f) {
            alert("Please enter all values (none can be zero).");
            return;
        }
         
        
  
        const avgSurplusPerMonth = calculateAverageSurplus(); 
        const totalLoanRepayment = calculateLoanTotal(); 
        const loanRepaymentPerMonth = totalLoanRepayment / (f * 12);
        const diff=avgSurplusPerMonth-loanRepaymentPerMonth;
      
        const threshold = loanRepaymentPerMonth + 2500;
        const isEligible = avgSurplusPerMonth > threshold;

        
        const loanContainer = document.getElementById("loan");
       
        loanContainer.innerHTML = "";

       
        const canvas = document.createElement("canvas");
        canvas.id = "myChart";
        canvas.width = 500;
        canvas.height = 400;
        canvas.style.backgroundColor = "white";
        // canvas.style.display = "block";
        canvas.style.margin = "20px";
        loanContainer.appendChild(canvas);

       
        const messagePara = document.createElement("p");
        messagePara.style.marginTop = "100px";
        messagePara.style.fontFamily = "cursive";
        messagePara.style.fontSize = "20px";
        messagePara.style.textAlign = "center";
        

        if (isEligible) {
            messagePara.textContent = `Congratulations! Your average monthly surplus is sufficient to cover the loan repayment plus a  ${diff} buffer. You are eligible for the loan. 🌾💸`;
            messagePara.style.color = "#2A7F2A"; 
            
        } else {
            messagePara.textContent = `Unfortunately, your current surplus isn't enough to cover the loan repayment plus a ${diff} buffer. You are not eligible for the loan under these conditions.`;
            messagePara.style.color = "#BF2A2A";
        }
        loanContainer.appendChild(messagePara);


        const ctx = canvas.getContext("2d");
        if (chart) {
            chart.destroy();
        }

       
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Average Surplus / month', 'Loan Repayment / month'],
                datasets: [{
                    label: 'Surplus vs. Loan',
                    data: [avgSurplusPerMonth, loanRepaymentPerMonth],
                    backgroundColor: ["#2A2A2A", "#333333"]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 14,
                                family: "cursive"
                            },
                            color: "#000000"
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 14,
                                family: "cursive"
                            },
                            color: "#000000"
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 16,
                                family: "cursive"
                            }
                        }
                    }
                }
            }
        });
    });
});
