import { generateRangeBetweenDates } from "../utils/generate-range-between-dates"
import { HabitDay } from "./HabitDay"
import { HabitDayFake } from "./HabitDayFake"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateRangeBetweenDates()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, i) => {
                  return (
                    <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">{weekDay}</div>
                  )
                })}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
              {summaryDates.map(date => {
                return (
                  <HabitDay amount={5} completed={Math.round(Math.random() * 5)} key={date.toString()} />
                )
              })}
              {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => {
                return <HabitDayFake key={i} />
              })}
            </div>
        </div>
    )
}