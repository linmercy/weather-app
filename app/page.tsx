'use client'

import CityPicker from "@/components/CityPicker"
import { Card, Text, Subtitle, Divider } from "@tremor/react"

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-500 to-black p-10 flex flex-col justify-center items-center ">
     <Card className=" max-w-6xl mx-auto bg-slate-200 rounded-lg">
        <Text className=" text-center text-6xl font-bold mb-10 ">
          Weather AI
        </Text>
        
        <Subtitle className=" text-xl text-center">
          Powered by OpenAI, Next.js 13.3, TailwindCSS, Tremor 2.0 +More!
        </Subtitle>

        <Divider className=" my-10" />

        <Card className=" bg-gradient-to-br from-slate-500 to-black">
          <CityPicker />
        </Card>
     </Card>
    </div>
  )
}
