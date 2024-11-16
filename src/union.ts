function kmtom(x: number | string) {
  if (typeof x === "string") {
    return parseInt(x) / 1000;
  } else {
    return x / 1000;
  }
}
kmtom(1000); // 1
kmtom("1000"); // 1
