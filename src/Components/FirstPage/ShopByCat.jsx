import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysCategoryCard from "./ToysCategoryCard";

const ShopByCat = () => {
  const categoryNames = ["Speed", "Retro", "Off-Road"];
  return (
    <div className="flex justify-center mx-3">
      <Tabs>
        <TabList className="flex justify-center text-sm  lg:text-2xl">
          <Tab>Speed Demons</Tab>
          <Tab>Off-Road Explorers</Tab>
          <Tab>Retro Classics</Tab>
        </TabList>
        <hr />
        <br />
        <TabPanel>
          <ToysCategoryCard categoryName={categoryNames[0]}></ToysCategoryCard>
        </TabPanel>
        <TabPanel>
          <ToysCategoryCard categoryName={categoryNames[1]}></ToysCategoryCard>
        </TabPanel>
        <TabPanel>
          <ToysCategoryCard categoryName={categoryNames[2]}></ToysCategoryCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCat;
