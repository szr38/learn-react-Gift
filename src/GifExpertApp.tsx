import React, { useState } from "react";
import { AddCategoty } from "./components/AddCategoty";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory: string) => {
    const newCategory1 = newCategory.toLowerCase();
    const temp = categories.find(
      (category) => category.toLowerCase() === newCategory1
    );
    if (!!temp) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* <AddCategoty onAddCategory={setCategories}></AddCategoty> */}
      <AddCategoty onAddCategory={onAddCategory}></AddCategoty>
      <ol>
        {categories.map((category) => {
          return <GiftGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

