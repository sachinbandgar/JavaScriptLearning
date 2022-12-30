
function BankDetails(bankName, location, ifscCode, branchCode){
this.bankName=bankName;
this.location = location;
this.ifscCode = ifscCode;
this.branchCode = branchCode;
}
BankDetails.prototype.openTime="9 AM IST";
BankDetails.prototype.closeTime = "6 PM IST"
let sbiBank = new BankDetails("sbiBank", "Pune", "SBIN0000454", 000454);
let yesBank = new BankDetails("yesBank", "Sangola", "YESB0BMSB13", 00010);
let mahBank = new BankDetails("mahBank", "Mumbai", "MAHB0000002", 000002 );
let axisBank = new BankDetails("axisBank", "Solapur", "UTIB0000266", 000266);
console.log(`=============== SBI Bank Details ================`);
console.log(sbiBank);
console.log(`=============== Yes Bank Details ================`);
console.log(yesBank);
console.log(`=============== MH Bank Details ================`);
console.log(mahBank);
console.log(`=============== Axis Bank Details ================`);
console.log(axisBank);

console.log(`============= Add the Data member ===============`);
console.log(`Opening time of SBI Bank is : ${sbiBank.openTime}`);
console.log(`Closing time of SBI Bank is : ${sbiBank.closeTime}`);
console.log(`Opening time of Yes Bank is : ${yesBank.openTime}`);
console.log(`Closing time of Yes Bank is : ${yesBank.closeTime}`);
console.log(`Opening time of Maharashtra Bank is : ${mahBank.openTime}`);
console.log(`Closing time of Maharashtra Bank is : ${mahBank.closeTime}`);
console.log(`Opening time of Axis Bank is : ${axisBank.openTime}`);
console.log(`Closing time of Axis Bank is : ${axisBank.closeTime}`);