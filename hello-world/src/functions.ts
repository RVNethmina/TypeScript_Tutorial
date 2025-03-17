function calculateTax(income : number,taxYear = 2011) : number{

    if(taxYear < 2022){
        return income * 0.01;
    }
    return income * 0.02;
}

calculateTax(10_000,2021); // 100