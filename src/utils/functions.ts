export function calculateEMI(
  principal: number,
  tenureInDays: number,
  monthlyRate: number
) {
  const dailyRate = monthlyRate / 30 / 100;
  const tenureInMonths = tenureInDays / 30;
  console.log(tenureInMonths);


  const emi =
    (principal * dailyRate * Math.pow(1 + dailyRate, tenureInDays)) /
    (Math.pow(1 + dailyRate, tenureInDays) - 1);

  const totalPayable = emi * tenureInDays;

  return {
    totalPayableAmount: Math.round(totalPayable),
    dailyEMI: Math.round(emi),
    monthlyEMI: Math.round(emi * 30),
  };
}

export function calculateEMI2(
  principal: number,
  tenureInDays: number,
  dailyRate: number // in percent
) {
  const rate = dailyRate / 100;

  const emi =
    (principal * rate * Math.pow(1 + rate, tenureInDays)) /
    (Math.pow(1 + rate, tenureInDays) - 1);

  const totalPayable = emi * tenureInDays;

  return {
    totalPayableAmount: Math.round(totalPayable),
    dailyEMI: Math.round(emi),
    monthlyEMI: Math.round(emi * 30),
  };
}

export function LoanEMICalculate(amount: number, periodInDays: number, interestRate: number): {
  loanAmount: number;
  tenure: string;
  totalPayable: number;
} {
  const si = (amount * periodInDays * interestRate) / 100;
  const total = amount + si;

  return {
    loanAmount: parseFloat(amount.toFixed(2)),
    tenure: `${periodInDays} Days`,
    totalPayable: parseFloat(total.toFixed(2)),
  };
}


