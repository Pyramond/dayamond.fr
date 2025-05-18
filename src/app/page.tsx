'use client'

import { useContext } from "react";
import { PageContext } from "@/context/page-context";
import Presentation from "@/components/presentation/presentation";
import Profile from "@/components/profile/profile"
import Separator from "@/components/separator/separator";
import Stack from "@/components/stack/stack";
import Projects from "@/components/projects/projects";


export default function Home() {

    const { value } = useContext(PageContext);

    const components = [<Presentation />, <Stack />, <Projects />];

  return (
      <div className="flex flex-row">
          <Profile />
          <Separator />
          {components[value]}
      </div>
  );
}