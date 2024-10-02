"use client";

import { CalcForm } from "@/app/ui/components/CalcForm";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-bg">
      <Tabs
        className="flex items-center justify-center"
        size="lg"
        variant="solid-rounded"
      >
        <TabList className="gap-4 px-20">
          <Tab>Доставка</Tab>
          <Tab>Забор</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CalcForm />
          </TabPanel>
          <TabPanel>
            <CalcForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
