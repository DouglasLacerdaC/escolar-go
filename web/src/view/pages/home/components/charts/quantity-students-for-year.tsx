import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/view/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/view/components/ui/chart'
const chartData = [
  { month: '2020', desktop: 186 },
  { month: '2021', desktop: 305 },
  { month: '2022', desktop: 237 },
  { month: '2023', desktop: 73 },
  { month: '2024', desktop: 209 },
  { month: '2025', desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: 'Alunos',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function QuantityStudentsForYearChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          Quantidade de alunos por ano
        </CardTitle>
        <CardDescription className="text-center">2020 - 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
