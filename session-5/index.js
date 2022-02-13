function getGrade (total) {
    let grade;
    
    if (total > 90) {
        grade = 'A+';
    }  
    else if (total > 80) {
        grade = 'A';
    }
    else if (total > 70){
        grade = 'B';
    }
    else if (total > 60) {
        grade = 'C';
    }
    else if (total > 50) {
        grade = 'D';
    }
    else if (total > 40) {
        grade = 'E';
    } 
    else if (total > 30) {
        grade = 'F';
    }
    else {
        grade = 'Fail';
    }

    console.log('Your grade is Fail ' + 'This is unfortunate');
}

switch (total) {
    case 90:
    console.log("Your score is 90");
    break;
    case 80:
        console.log("Your score is 80");
        break;
    case 70:
        console.log("Your score is 70");
        break;
    case 60:
        console.log("Your score os 60");
        break;
    case 50:
        console.log("Your score is 50");
        break;
    case 40:
            console.log("Not too bad")
            break;
    case 30:
        console.log("You didn't meet the criteria");
    default:
        console.log("Not too sure");
}
