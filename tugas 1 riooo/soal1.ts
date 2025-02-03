function countingValleys(steps: number, path: string): number {
  let level = 0; // Level ketinggian saat ini (0 = permukaan laut)
  let valleys = 0; // Jumlah lembah yang dilalui
  let inValley = false;

  for (let i = 0; i < steps; i++) {
    // Perbarui level saat ini berdasarkan arah langkah
    if (path[i] === "U") {
      level++;
    } else if (path[i] === "D") {
      level--;
    }

    // Periksa apakah kita memasuki atau meninggalkan lembah
    if (level < 0 && !inValley) {
      inValley = true;
      valleys++;
    } else if (level >= 0) {
      inValley = false;
    }
  }

  return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
