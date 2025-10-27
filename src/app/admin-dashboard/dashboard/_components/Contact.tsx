// import { Card } from "@/components/ui/card"

// interface Message {
//     id: string
//     name: string
//     role: string
//     content: string
// }

// const messages: Message[] = [
//     {
//         id: "1",
//         name: "Sarah Johnson",
//         role: "Student",
//         content:
//             "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
//     },
//     {
//         id: "2",
//         name: "Sarah Johnson",
//         role: "Student",
//         content:
//             "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
//     },
//     {
//         id: "3",
//         name: "Sarah Johnson",
//         role: "Student",
//         content:
//             "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
//     },
//     {
//         id: "4",
//         name: "Sarah Johnson",
//         role: "Student",
//         content:
//             "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
//     },
// ]

// export function MessagesSection() {
//     return (
//         <Card className="mx-auto p-0 bg-[#FFFFFF]">
//             <div className="p-6">
//                 <div className=" mb-4 flex items-center justify-between">
//                     <h1 className="text-2xl font-semibold text-[#1A1A1A]">Messages</h1>
//                     <button className="text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors">See all</button>
//                 </div>

//                 <div className="space-y-4">
//                     {messages.map((message) => (
//                         <div key={message.id} className=" border-none  shadow-none ">
//                             <div className="flex gap-4 py-4">
//                                 <div className="flex">
//                                     <div className="py-3.5 px-4">
//                                         <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">{message.name}</h3>
//                                         <p className="text-sm text-[#9CA3AF] mb-3">{message.role}</p>
//                                     </div>
//                                     <p className="text-sm leading-relaxed text-[#6B7280]">{message.content}</p>
//                                 </div>
//                             </div>
//                             <hr className="mt-4" />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </Card>
//     )
// }

"use client"

import { Card } from "@/components/ui/card"

interface Message {
  id: string
  name: string
  role: string
  content: string
}

const messages: Message[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Student",
    content:
      "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Student",
    content:
      "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    role: "Student",
    content:
      "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
  },
  {
    id: "4",
    name: "Sarah Johnson",
    role: "Student",
    content:
      "I recently started my mindfulness journey and came across The Unburdened Mind. Your approach really resonated with me — especially the focus on releasing what no longer serves us. I've been feeling a bit stuck lately and would love to learn more about your coaching sessions and how they might help me gain more clarity and balance in my daily life.",
  },
]

export function MessagesSection() {
  return (
    <Card className="mx-auto w-full border border-[#E5E7EB] bg-white shadow-sm rounded-xl">
      <div className="p-6">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1A1A1A]">Messages</h2>
          <button className="text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors">
            See all
          </button>
        </div>

        {/* Messages list */}
        <div>
          {messages.map((message, index) => (
            <div key={message.id} className="py-4">
              <div className="flex  items-start gap-4">
                <div className="min-w-[180px] px-4">
                  <h3 className="text-base font-semibold text-[#1A1A1A] leading-none">
                    {message.name}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] mt-1">{message.role}</p>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed ">
                  {message.content}
                </p>
              </div>
              {index !== messages.length - 1 && (
                <hr className="mt-4 border-[#E5E7EB]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
