describe("smoke", () => {
  test("jest está configurado", () => {
    expect(true).toBe(true);
  });
  test("jest esta configurado ", () => {
    const num1:number = 5;
    const num2:number = 3;
    const resultado:number = num1 + num2;
    expect(resultado).toBe(8);
  });
  test("areas de un trapecio", () => {
    const basemayor:number = 5;
    const basemenor:number = 3;
    const altura:number = 6;
    const area:number = ((basemayor + basemenor) * altura) / 2;

    expect(area).toBe(24);
  });
  
});