import { getDateInfo } from ".";
import { getDayMoment } from ".";

describe("getDayMoment", () => {
    it("return morning if hour is between 4 (include) and 12 (exclue)", () => {
        expect(getDayMoment(4)).toBe("morning");
        expect(getDayMoment(7)).toBe("morning");
        expect(getDayMoment(12)).not.toBe("morning");
    });

    it("return noon if hour is between 12 (include) and 18 (exclue)", () => {
        expect(getDayMoment(12)).toBe("noon");
        expect(getDayMoment(15)).toBe("noon");
        expect(getDayMoment(18)).not.toBe("noon");
    });

    it("return evening if hour is between 18 (include) and 4 the next day (exclue)", () => {
        expect(getDayMoment(18)).toBe("evening");
        expect(getDayMoment(22)).toBe("evening");
        expect(getDayMoment(2)).toBe("evening");
        expect(getDayMoment(4)).not.toBe("evening");
    });
});

describe("getDateInfo", () => {
  const RealDate = Date;

  beforeAll(() => {
    // On "mock" Date pour toujours retourner la même date
    global.Date = class extends RealDate {
      constructor() {
        super("2024-08-29T15:30:00Z"); // jeudi 29 août 2024 à 15h30 UTC
      }
    } as any;
  });

  afterAll(() => {
    global.Date = RealDate; // on restaure la vraie Date
  });

  it("retourne les infos correctes", () => {
    const result = getDateInfo();

    expect(result).toEqual({
      dayOfWeek: "jeudi",       // attendu en français
      dayAndMonth: "29 août",   // format JJ mois
      hour: 15,                 // 15h UTC → 17h locale si timezone FR
    });
  });
});