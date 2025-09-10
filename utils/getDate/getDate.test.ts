import { getDateInfo } from ".";
import { getDayMoment } from ".";

describe("getDayMoment", () => {
  it("return morning if hour is between 0 (include) and 12 (exclue)", () => {
    expect(getDayMoment(0)).toBe("morning");
    expect(getDayMoment(7)).toBe("morning");
    expect(getDayMoment(12)).not.toBe("morning");
  });

  it("return noon if hour is between 12 (include) and 18 (exclue)", () => {
    expect(getDayMoment(12)).toBe("noon");
    expect(getDayMoment(15)).toBe("noon");
    expect(getDayMoment(18)).not.toBe("noon");
  });

  it("return evening if hour is between 18 (include) and 23 (include)", () => {
    expect(getDayMoment(18)).toBe("evening");
    expect(getDayMoment(22)).toBe("evening");
    expect(getDayMoment(0)).not.toBe("evening");
  });
});

describe("getDateInfo", () => {
  let realGetHours: any;
  let realIntl: any;

  beforeAll(() => {
    const realGetHours = Date.prototype.getHours;
    Date.prototype.getHours = () => 15;

    const realIntl = Intl.DateTimeFormat;
    (global as any).Intl.DateTimeFormat = class {
      options: any; // <-- déclarer la propriété
      constructor(locale: string, options?: any) {
        this.options = options;
      }
      format() {
        if (this.options?.weekday) return "jeudi";
        if (this.options?.day && this.options?.month) return "29 août";
        return "";
      }
      resolvedOptions() {
        return this.options;
      }
    } as any;
  });

  afterAll(() => {
    Date.prototype.getHours = realGetHours;
    (global as any).Intl.DateTimeFormat = realIntl;
  });

  it("retourne les infos correctes", () => {
    const result = getDateInfo();
    expect(result).toEqual({
      dayOfWeek: "jeudi",
      dayAndMonth: "29 août",
      hour: 15,
    });
  });
});
