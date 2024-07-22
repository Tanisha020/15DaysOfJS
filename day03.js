// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero, and log the result to the console.
function check(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

check(0);   // Output: Zero
check(22);  // Output: Positive
check(-2);  // Output: Negative

// Task 2: Check if a person is eligible to vote (age >= 18) and log the result to the console.
function canVote(age) {
    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("You can not vote");
    }
}

canVote(18);  // Output: You can vote
canVote(14);  // Output: You can not vote

// Activity 2: Nested If-Else Statements

// Task 3: Find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

findLargest(10, 22, 78);  //Output:  78


// Activity 3: Switch Case

// Task 4: Determine the day of the week based on a number (1-7) and log the day name to the console.
function getDay(number) {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}
// Outputs
getDay(1);  // Output: Monday
getDay(0);  // Output: Invalid day

// Task 5: Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}

assignGrade(94);  //Output:  B
assignGrade(48);  //Output:  F

// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}

checkEvenOdd(10);  //Output:  Even
checkEvenOdd(7);   //Output:  Odd

// Activity 5: Combining Conditions

// Task 7: Check if a year is a leap year using multiple conditions and log the result to the console.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}

isLeapYear(2024);  //Output:  Leap year
isLeapYear(2023);  //Output:  Not a leap year

// Feature Requests

// 1. Number Check Script
function numberCheckScript(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

numberCheckScript(0);  //Output: Zero
numberCheckScript(225);  //Output: Positive
numberCheckScript(-7); //Output: Negative

// 2. Voting Eligibility Script
function votingEligibilityScript(age) {
    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("You can not vote");
    }
}

votingEligibilityScript(75); //Output: You can vote
votingEligibilityScript(12); //Output: You can not vote

// 3. Day of the Week Script
function dayOfTheWeekScript(number) {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}
// Outputs
dayOfTheWeekScript(3); //Output: Wednesday
dayOfTheWeekScript(98); //Output: Invalid day

// 4. Grade Assignment Script
function gradeAssignmentScript(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}

gradeAssignmentScript(92); //Output:  A
gradeAssignmentScript(47); //Output:  F

// 5. Leap Year Check Script
function leapYearCheckScript(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}

leapYearCheckScript(2024); //Output:  Leap year
leapYearCheckScript(2023); //Output:  Not a leap year
