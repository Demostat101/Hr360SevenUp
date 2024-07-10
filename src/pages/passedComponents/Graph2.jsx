
import { BarChart, Bar,ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { salesData } from "./GraphData";
const halfsales = salesData.slice(6,12);
console.log(halfsales);


const Graph2 = () => {
  return (
       <ResponsiveContainer width="100%" height="100%">
             <BarChart data={halfsales}>
             <XAxis dataKey="month"/>
             <YAxis/>
             <Tooltip/>
             <Legend/>
                <Bar dataKey="sevenUp" fill="#B4D4FF" />
                <Bar dataKey="aquafina" fill="#F4D35E" />
             </BarChart>
       </ResponsiveContainer>
  )
}

export default Graph2
