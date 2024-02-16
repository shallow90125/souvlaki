"use client";

import { skills } from "@/utils/skills";
import { Card, CardBody } from "@nextui-org/react";
import { IconStarFilled } from "@tabler/icons-react";

type Props = {
  icon: keyof typeof skills;
};

export default function TagCard(props: Props) {
  return (
    <Card className=" grid place-items-center">
      <CardBody className=" flex flex-col place-items-center gap-4 p-4 md:w-56 md:flex-row">
        <div className=" grid flex-none place-items-center">
          {skills[props.icon].icon}
        </div>
        <div className=" grid flex-grow gap-2">
          <div>{skills[props.icon].name}</div>
          <div className=" flex place-content-start place-items-center gap-1">
            {(() => {
              const stars = [];
              for (let index = 0; index < skills[props.icon].rating; index++) {
                stars.push(
                  <IconStarFilled className=" text-primary" size={16} />,
                );
              }
              return stars;
            })()}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
