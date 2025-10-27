"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const chartData = [
    { month: "Jan", users: 60 },
    { month: "Feb", users: 100 },
    { month: "Mar", users: 80 },
    { month: "Apr", users: 70 },
    { month: "May", users: 120 },
    { month: "Jun", users: 160 },
    { month: "Jul", users: 150 },
    { month: "Aug", users: 140 },
    { month: "Sep", users: 180 },
    { month: "Oct", users: 200 },
    { month: "Nov", users: 110 },
    { month: "Dec", users: 120 },
]

export function ActiveUsers() {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Active Users</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">September, 2025</p>
            </CardHeader>
            <CardContent className="h-[350px] px-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#5A8DEE" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#5A8DEE" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={8}
                            fontSize={12}
                            tick={{ fill: "#888" }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            fontSize={12}
                            tick={{ fill: "#888" }}
                        />
                        <Tooltip
                            cursor={{ stroke: "#5A8DEE", strokeWidth: 1 }}
                            contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #E2E8F0",
                                borderRadius: "6px",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            }}
                            labelStyle={{ fontWeight: "500" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="users"
                            stroke="#5A8DEE"
                            fillOpacity={1}
                            fill="url(#colorUsers)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
