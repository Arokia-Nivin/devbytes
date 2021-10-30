import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 1 - firstDayOfTheMonth;
  let daysMatrix = [['S ','M ','T ','W ','T ','F ','S ']];

  for(let row=0;row<5;row++) {
      let rows = []
      for(let col=0;col<7;col++) {
        
        rows.push(dayjs(new Date(year, month, currentMonthCount)));
        currentMonthCount++;
      }
      daysMatrix.push(rows);
  }


  return daysMatrix;
}