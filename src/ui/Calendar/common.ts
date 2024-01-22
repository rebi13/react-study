/**
 * 해당 월의 마지막 날짜를 구하는 함수
 * @param year number 타입의 년도
 * @param month number 타입의 월
 * @returns number 타입의 해당 월의 마지막 날짜
 */
const getMonthlyDate = (
  year: number,
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
) => {
  if (!Number.isInteger(year) || year < 0 || year > 9999) {
    throw new Error(
      "Invalid year. It should be an integer between 0 and 9999."
    );
  }

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error("Invalid month. It should be an integer between 1 and 12.");
  }

  switch (month) {
    case 4:
    case 5:
    case 9:
    case 11:
      return 30;
    case 2:
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    default:
      return 31;
  }
};

export { getMonthlyDate };
