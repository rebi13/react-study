import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getMonthlyDate } from "../common";

const BasicCalendar = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  console.log(getMonthlyDate(2020, 2));
  return (
    <div>
      <div>
        <span>2024년 1월</span>
        <span>
          <BsChevronLeft />
        </span>
        <span>
          <BsChevronRight />
        </span>
      </div>
      <div>
        <span>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
      </div>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <div>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
      </div>
      <div>
        <span>15</span>
        <span>16</span>
        <span>17</span>
        <span>18</span>
        <span>19</span>
        <span>20</span>
        <span>21</span>
      </div>
      <div>
        <span>22</span>
        <span>23</span>
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
      </div>
      <div>
        <span>29</span>
        <span>30</span>
        <span>31</span>
      </div>
    </div>
  );
};

export default BasicCalendar;
