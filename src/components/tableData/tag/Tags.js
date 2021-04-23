import React, { useState, useEffect } from "react";

export default function Tags({ tagsUpdated, key }) {
  const tagChoices = [
    "セル（アセテート）",
    "メタル（ステンレス・アルミ）",
    "セル（TR-90）",
    "メタル（チタン）",
    "PES",
    "ウルテム",
    "PPSU",
    "セルロイド",
    "その他",
  ];
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    setSelectedTags([]);
  }, [key]);

  const tagChange = (e) => {
    const value = e.target.value;
    const alreadySelected = selectedTags.includes(value);
    if (e.target.checked && !alreadySelected) {
      setSelectedTags([...selectedTags, value]);
    } else if (!e.target.checked && alreadySelected) {
      setSelectedTags(selectedTags.filter((prevTag) => prevTag !== value));
    }
  };

  useEffect(() => {
    tagsUpdated(selectedTags);
  }, [selectedTags, tagsUpdated]);

  return (
    <>
      {tagChoices.map((choice, index) => (
        <label className="checkbox-inline mr-3" key={index}>
          <input type="checkbox" value={choice} onChange={tagChange} />
          {" " + choice}
        </label>
      ))}
    </>
  );
}
