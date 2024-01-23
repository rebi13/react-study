import { useCallback, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { days } from "../common";

const BasicCalendar = () => {
  // 현재 날짜
  const [day, setDay] = useState(new Date());
  // 날짜 표시 2차원 배열 (7xn 형식)
  const [dates, setDates] = useState<Date[][]>([]);
  // 선택한 날짜
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 해당 월의 날짜 데이터 생성
  const getDates = useCallback(() => {
    const firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
    const lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const lastDayOfWeek = lastDay.getDay();

    const lastDate = lastDay.getDate();

    const prevDates = [];
    const nextDates = [];
    const currentDates = [];

    // 이전 달의 날짜를 구한다. (1일이 일요일이 아닐 경우)
    for (let i = 0; i < firstDayOfWeek; i++) {
      const date = new Date(day.getFullYear(), day.getMonth(), -i);
      prevDates.push(date);
    }

    // 현재 달의 날짜를 구한다.
    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(day.getFullYear(), day.getMonth(), i);
      currentDates.push(date);
    }

    // 다음 달의 날짜를 구한다. (마지막 날이 토요일이 아닐 경우)
    for (let i = 1; i < 7 - lastDayOfWeek; i++) {
      const date = new Date(day.getFullYear(), day.getMonth() + 1, i);
      nextDates.push(date);
    }

    // 날짜 배열을 합친다. 이전 달의 날짜는 마지막 날부터 배열에 push하므로 역순 정렬을 해준다.
    const dates = [...prevDates.reverse(), ...currentDates, ...nextDates];

    // 7개씩 잘라서 2차원 배열로 만든다.
    setDates(
      Array.from({ length: Math.ceil(dates.length / 7) }, (v, i) =>
        dates.slice(i * 7, i * 7 + 7)
      )
    );
  }, [day]);

  // 이전 달로 이동
  const setPrevMonth = () => {
    setDay(new Date(day.getFullYear(), day.getMonth() - 1, day.getDate()));
  };

  // 다음 달로 이동
  const setNextMonth = () => {
    setDay(new Date(day.getFullYear(), day.getMonth() + 1, day.getDate()));
  };

  // 날짜 데이터 생성
  useEffect(() => {
    getDates();
  }, [day, getDates]);

  return (
    <div style={{ width: "300px" }}>
      <DateHeader>
        <h1>
          {day.getFullYear()}년 {day.getMonth() + 1}월
        </h1>
        <span>
          <BsChevronLeft onClick={setPrevMonth} />
          <BsChevronRight onClick={setNextMonth} />
        </span>
      </DateHeader>
      <table>
        <thead>
          <tr>
            {days.map((day) => (
              <DayCell $isSat={day.$isSat} $isHol={day.$isHol} key={day.day}>
                {day.day}
              </DayCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map((week, weekIndex) => {
            return (
              <tr key={weekIndex}>
                {week.map((date) => {
                  return (
                    <DateCell
                      $isCurrent={day.getMonth() !== date.getMonth()}
                      $isSat={date.getDay() === 6}
                      $isHol={date.getDay() === 0}
                      key={date.toISOString()}
                      onClick={() => {
                        setSelectedDate(date);
                      }}
                    >
                      {date.getDate()}
                    </DateCell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>선택한 날짜 : {selectedDate?.toDateString()}</div>
    </div>
  );
};

export default BasicCalendar;

const DateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DayCell = styled.th<{ $isSat?: boolean; $isHol?: boolean }>`
  width: 1rem; // 14.28%;
  height: 1rem;
  text-align: center;
  vertical-align: top;
  padding: 10px;
  background-color: #fff;
  color: ${(props) => (props.$isSat ? "blue" : props.$isHol ? "red" : "#000")};
`;

const DateCell = styled.td<{
  $isCurrent: boolean;
  $isSat: boolean;
  $isHol: boolean;
}>`
  width: 1rem; // 14.28%;
  height: 1rem;
  border: 1px solid #ccc;
  text-align: center;
  vertical-align: top;
  padding: 10px;
  background-color: #fff;
  color: ${(props) =>
    props.$isCurrent
      ? "gray"
      : props.$isSat
      ? "blue"
      : props.$isHol
      ? "red"
      : "#000"};
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
