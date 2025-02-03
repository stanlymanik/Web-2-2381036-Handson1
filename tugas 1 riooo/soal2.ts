function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    // Jika nilai kurang dari 38, tidak ada pembulatan
    if (grade < 38) {
      return grade;
    }

    // Mencari kelipatan 5 terdekat berikutnya
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

    // Jika selisihnya kurang dari 3, bulatkan ke atas
    if (nextMultipleOf5 - grade < 3) {
      return nextMultipleOf5;
    }

    return grade;
  });
}

const grades = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log("Nilai input:", grades);
console.log("Nilai output:", result);
