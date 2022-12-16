console.log(`=========== Ternary operator and function expression =========`);


var interviewEligibility = function(gradScore, hscScore, sccScore, candidateName){

    var res = (gradScore>=70 && hscScore >=80 ) || sccScore>=90 ?  `Congrates ${candidateName} you are eligible for TCS interview.` : `Hi ${candidateName} : Sorry Unfortunately you are not eligible for interview.`;
console.log(res);

}
interviewEligibility(80, 86, 90, "sachin");

interviewEligibility(70, 65, 55, "Nilesh");

interviewEligibility(60, 79, 88, "Shree");