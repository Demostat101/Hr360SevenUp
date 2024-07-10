"use client";
import { BarChart, Bar,ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { salesData } from "./GraphData";
const halfsales = salesData.slice(0,6);
console.log(halfsales);


const Graph = () => {
  return (
       <ResponsiveContainer width="100%" height="100%">
             <BarChart width={500} height={400} data={halfsales}>
             {/* <CartesianGrid strokeDasharray="3 3"  /> */}
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

export default Graph
