import React, { useCallback } from "react";
import { Modal } from "antd";

import blockOptions from "../blockOptions";

import "./CreateBlock.css";

export default function CreateBlock({ visible, setVisibility, setEditableBlock, setBlocks }) {
  const handleCancel = useCallback(() => {
    setVisibility(false);
  }, []);

  const handleOk = useCallback(block => {
    console.log({ block });
    if (block.fields) {
      setEditableBlock(block);
    } else {
      setBlocks(current => {
        const res = [...current, block];

        localStorage.setItem("blocks", JSON.stringify(res));

        return res;
      });
    }

    setVisibility(false);
  }, []);

  return (
    <Modal visible={visible} onOk={handleCancel} onCancel={handleCancel}>
      <div className="blockOptions">
        {blockOptions.map((block, index) => (
          <div type={index} onClick={() => handleOk(block)} className="option">
            {block.label} {block.asset} {block.domain && `(${block.domain})`}
          </div>
        ))}
      </div>
    </Modal>
  );
}
