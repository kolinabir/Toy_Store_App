import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCat = () => {
  return (
    <div className="flex justify-center">
      <Tabs>
        <TabList>
          <Tab>Speed Demons</Tab>
          <Tab>Off-Road Explorers</Tab>
          <Tab>Retro Classics</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCat;
