// // "use client"

// // import {
// //   Area,
// //   AreaChart,
// //   CartesianGrid,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts"
// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card"
// // import { useActiveUser } from "@/hooks/ApiCalling"
// // import { useSession } from "next-auth/react"
// // import { Skeleton } from "@/components/ui/skeleton"

// // export function ActiveUsers() {
// //   const { data: session } = useSession()
// //   const accessToken = session?.user?.accessToken || ""

// //   const { data, isLoading, isError } = useActiveUser(accessToken, "2025")

// //   if (isLoading) {
// //     return (
// //       <Card className="w-full">
// //         <CardHeader>
// //           <CardTitle>Active Users</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <Skeleton className="h-[300px] w-full" />
// //         </CardContent>
// //       </Card>
// //     )
// //   }

// //   if (isError || !data?.data) {
// //     return (
// //       <Card className="w-full">
// //         <CardHeader>
// //           <CardTitle>Active Users</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <p className="text-center text-muted-foreground">Failed to load data</p>
// //         </CardContent>
// //       </Card>
// //     )
// //   }

// //   const chartData = data.data.map((item: { month: string; totalUsers: number }) => ({
// //     month: item.month.slice(0, 3), // e.g. "January" → "Jan"
// //     users: item.totalUsers,
// //   }))

// //   return (
// //     <Card className="w-full">
// //       <CardHeader className="flex flex-row items-center justify-between">
// //         <CardTitle>Active Users</CardTitle>
// //        {/* add year picker  */}
// //       </CardHeader>
// //       <CardContent className="h-[300px] px-2">
// //         <ResponsiveContainer width="100%" height="100%">
// //           <AreaChart
// //             data={chartData}
// //             margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
// //           >
// //             <defs>
// //               <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
// //                 <stop offset="5%" stopColor="#5A8DEE" stopOpacity={0.4} />
// //                 <stop offset="95%" stopColor="#5A8DEE" stopOpacity={0} />
// //               </linearGradient>
// //             </defs>
// //             <CartesianGrid strokeDasharray="3 3" vertical={false} />
// //             <XAxis
// //               dataKey="month"
// //               axisLine={false}
// //               tickLine={false}
// //               tickMargin={8}
// //               fontSize={12}
// //               tick={{ fill: "#888" }}
// //             />
// //             <YAxis
// //               axisLine={false}
// //               tickLine={false}
// //               fontSize={12}
// //               tick={{ fill: "#888" }}
// //             />
// //             <Tooltip
// //               cursor={{ stroke: "#5A8DEE", strokeWidth: 1 }}
// //               contentStyle={{
// //                 backgroundColor: "white",
// //                 border: "1px solid #E2E8F0",
// //                 borderRadius: "6px",
// //                 boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// //               }}
// //               labelStyle={{ fontWeight: "500" }}
// //             />
// //             <Area
// //               type="monotone"
// //               dataKey="users"
// //               stroke="#5A8DEE"
// //               fillOpacity={1}
// //               fill="url(#colorUsers)"
// //               strokeWidth={2}
// //             />
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       </CardContent>
// //     </Card>
// //   )
// // }


// "use client"

// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts"
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { useActiveUser } from "@/hooks/ApiCalling"
// import { useSession } from "next-auth/react"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useState } from "react"

// export function ActiveUsers() {
//   const { data: session } = useSession()
//   const accessToken = session?.user?.accessToken || ""


//   const currentYear = new Date().getFullYear()
//   const [selectedYear, setSelectedYear] = useState<string>(String(currentYear))


//   const { data, isLoading, isError, refetch } = useActiveUser(accessToken, selectedYear)

//   const handleYearChange = (year: string) => {
//     setSelectedYear(year)
//     refetch() 
//   }

//   // ✅ Loading skeleton
//   if (isLoading) {
//     return (
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>Active Users</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Skeleton className="h-[300px] w-full" />
//         </CardContent>
//       </Card>
//     )
//   }


//   if (isError || !data?.data) {
//     return (
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>Active Users</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-center text-muted-foreground">Failed to load data</p>
//         </CardContent>
//       </Card>
//     )
//   }

//   const chartData = data.data.map((item: { month: string; totalUsers: number }) => ({
//     month: item.month.slice(0, 3),
//     users: item.totalUsers,
//   }))

//   return (
//     <Card className="w-full">
//       <CardHeader className="flex flex-row items-center justify-between">
//         <CardTitle>Active Users</CardTitle>


//         <Select
//           onValueChange={handleYearChange}
//           defaultValue={selectedYear}
//         >
//           <SelectTrigger className="w-[120px]">
//             <SelectValue placeholder="Select Year" />
//           </SelectTrigger>
//           <SelectContent>
//             {/* You can extend this to more years */}
//             {[currentYear, currentYear - 1, currentYear - 2].map((year) => (
//               <SelectItem key={year} value={String(year)}>
//                 {year}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </CardHeader>

//       <CardContent className="h-[300px] px-2">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             data={chartData}
//             margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
//           >
//             <defs>
//               <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#5A8DEE" stopOpacity={0.4} />
//                 <stop offset="95%" stopColor="#5A8DEE" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis
//               dataKey="month"
//               axisLine={false}
//               tickLine={false}
//               tickMargin={8}
//               fontSize={12}
//               tick={{ fill: "#888" }}
//             />
//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               fontSize={12}
//               tick={{ fill: "#888" }}
//             />
//             <Tooltip
//               cursor={{ stroke: "#5A8DEE", strokeWidth: 1 }}
//               contentStyle={{
//                 backgroundColor: "white",
//                 border: "1px solid #E2E8F0",
//                 borderRadius: "6px",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//               }}
//               labelStyle={{ fontWeight: "500" }}
//             />
//             <Area
//               type="monotone"
//               dataKey="users"
//               stroke="#5A8DEE"
//               fillOpacity={1}
//               fill="url(#colorUsers)"
//               strokeWidth={2}
//               isAnimationActive
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   )
// }



"use client"

import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useActiveUser } from "@/hooks/ApiCalling"
import { useSession } from "next-auth/react"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function ActiveUsers() {
    const { data: session } = useSession()
    const accessToken = session?.user?.accessToken || ""

    const startYear = 2023
    const currentYear = new Date().getFullYear()


    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, i) => startYear + i
    )

    const [selectedYear, setSelectedYear] = useState<string>(String(currentYear))

    const { data, isLoading, isError, refetch } = useActiveUser(accessToken, selectedYear)

    const handleYearChange = (year: string) => {
        setSelectedYear(year)
        refetch()
    }

    if (isLoading) {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-[300px] w-full" />
                </CardContent>
            </Card>
        )
    }

    if (isError || !data?.data) {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">Failed to load data</p>
                </CardContent>
            </Card>
        )
    }

    const chartData = data.data.map((item: { month: string; totalUsers: number }) => ({
        month: item.month.slice(0, 3),
        users: item.totalUsers,
    }))

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Users</CardTitle>

                {/* ✅ Dynamic Year Picker (2023 → current year) */}
                <Select onValueChange={handleYearChange} defaultValue={selectedYear}>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                        {years.map((year) => (
                            <SelectItem key={year} value={String(year)}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent className="h-[300px] px-2">
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
                            isAnimationActive
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
