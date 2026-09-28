function checkAttendance() {

    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();

    const total = Number(
        document.getElementById("totalClasses").value
    );

    const attended = Number(
        document.getElementById("attendedClasses").value
    );

    const result = document.getElementById("result");

    if (!studentId || !studentName || !total || attended < 0) {

        result.className = "result fail";

        result.innerHTML =
            "⚠️ Please enter all student details correctly.";

        return;
    }

    if (attended > total) {

        result.className = "result fail";

        result.innerHTML =
            "⚠️ Classes attended cannot be greater than total classes.";

        return;
    }

    const percentage = (attended / total) * 100;

    const formattedPercentage = percentage.toFixed(2);

    result.className = "result";

    if (percentage >= 75) {

        result.classList.add("success");

        result.innerHTML =
            `✓ ${studentName} (${studentId}) has <strong>${formattedPercentage}%</strong> attendance — ELIGIBLE.`;

    } else {

        result.classList.add("fail");

        result.innerHTML =
            `⚠️ ${studentName} (${studentId}) has <strong>${formattedPercentage}%</strong> attendance — NOT ELIGIBLE.`;

    }

}