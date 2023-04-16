import React from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import clsx from "clsx";

interface TAB_TYPE {
  label: string;
  content?: React.ReactNode;
}
interface ITabProps {
  tabs: TAB_TYPE[];
  variant?: "contained";
  [x: string]: any;
}

export const Tab = ({ tabs, variant }: ITabProps) => {
  return (
    <div className="py-1 sm:px-0">
      <HeadlessTab.Group>
        <HeadlessTab.List className={clsx("Tab")}>
          {tabs.map((tab) => (
            <HeadlessTab
              key={tab.label}
              className={({ selected }) =>
                clsx(TabVariantClass[variant!], {
                  ["Tab__contained_selected"]:
                    selected && variant === "contained",
                })
              }
            >
              {tab.label}
            </HeadlessTab>
          ))}
        </HeadlessTab.List>
        <HeadlessTab.Panels className="mt-2">
          {tabs.map((panels, index) => (
            <HeadlessTab.Panel key={index}>{panels.content}</HeadlessTab.Panel>
          ))}
        </HeadlessTab.Panels>
      </HeadlessTab.Group>
    </div>
  );
};

export default Tab;

Tab.defaulProps = {
  variant: "contained",
};

const TabVariantClass = {
  contained: "Tab__contained",
};
