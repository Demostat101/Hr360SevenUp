
import {useState} from "react"
import Calendar from "react-calendar"

const DashCalender = () => {
    const [calender, setCalender] = useState(new Date())
  return (
    <div>
      <Calendar setCalender={setCalender} calender={calender}/>
    </div>
  )
}

export default DashCalender
