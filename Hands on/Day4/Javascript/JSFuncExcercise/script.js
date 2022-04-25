function findIfEligibleForVoting(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

var result = findIfEligibleForVoting(12);

function printEligibleOrNot(result) {
    if (result === true) {
        console.log("Eligible for voting");
    } else {
        console.log("Not Eligible for voting");
    }
}

printEligibleOrNot(result);

var result1 = findIfEligibleForVoting(40);
printEligibleOrNot(result1);