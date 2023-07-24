"use client";

import { Card, Metric, Text, Color} from "@tremor/react"

type Props = {
  title: string;
  metric: string;
  color?: Color;
};


function StatsCard({title, metric,color}: Props) {
  return <Card decorationColor={color} decoration="top">
    <Text>
      {title}
    </Text>

    <Metric>
      {metric}
    </Metric>
  </Card>
}

export default StatsCard;
