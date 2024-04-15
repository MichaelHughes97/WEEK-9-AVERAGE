function calculateAverage() {
    var numSubjects = parseInt(document.getElementById("numSubjects").value);
    var marks = [];

    for (var i = 0; i < numSubjects; i++) {
        var mark = prompt("Enter mark for subject " + (i + 1) + ":");
        marks.push(parseInt(mark));
    }

    var averageMark = calculateAverageMark(marks);
    document.getElementById("output").innerText = "Your average mark is: " + averageMark.toFixed(2);
}

function calculateAverageMark(marks) {
    var totalMarks = 0;
    for (var i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }
    return totalMarks / marks.length;
}