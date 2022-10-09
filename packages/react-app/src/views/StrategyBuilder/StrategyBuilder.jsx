import React, { useState, useEffect } from "react";

import Block from "./Block";
import CreateBlock from "./CreateBlock";
import BlockDetails from "./BlockDetails";
import "./StrategyBuilder.css";

export default function StrategyBuilder() {
  const [blocks, setBlocks] = useState([]);
  const [addBlockModalOpen, setAddBlockModalOpen] = useState(false);
  const [editableBlock, setEditableBlock] = useState(null);

  useEffect(() => {
    const blocks = JSON.parse(localStorage.getItem("blocks"));

    setBlocks(blocks ?? []);
  }, []);

  return (
    <div>
      <h1>Strategy Builderrrr</h1>

      <div className="blocks">
        {blocks.map((block, index) => (
          <div className="blockWrapper" type={index}>
            <Block />

            <BlockDetails data={block} />
          </div>
        ))}

        <div className="blockWrapper">
          <Block variant="add" onClick={() => setAddBlockModalOpen(true)} />

          <BlockDetails
            data={editableBlock}
            setBlocks={setBlocks}
            blocks={blocks}
            setEditableBlock={setEditableBlock}
          />
        </div>
      </div>

      <CreateBlock
        visible={addBlockModalOpen}
        setVisibility={setAddBlockModalOpen}
        setEditableBlock={setEditableBlock}
        setBlocks={setBlocks}
      />
    </div>
  );
}
