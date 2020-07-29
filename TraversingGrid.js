function TraversingGrid() {
  for (i = 0; i < cases; i++) {
    if (n <= m) {
      if (n % 2) {
        console.log('R')
      } else {
        console.log('L')
      }
    } else {
      if (m % 2) {
        console.log('D')
      } else {
        console.log('U')
      }
    }
  }
}
