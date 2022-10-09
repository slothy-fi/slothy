import React, { useCallback, useState, useEffect } from "react";

import "./BlockDetails.css";

export default function BlockDetails({ data, blocks, setBlocks, setEditableBlock }) {
  const [blockData, setBlockData] = useState(data);

  useEffect(() => {
    setBlockData(data);
  }, [data]);

  const handleAddBlock = useCallback(() => {
    console.log("add new block", blockData);

    if (blocks.length > 0) {
      setBlocks(current => {
        const res = [
          ...current,
          {
            ...blockData,
            in: blocks[blocks.length - 1].out,
            out: blocks[blocks.length - 1].out,
          },
        ];

        localStorage.setItem("blocks", JSON.stringify(res));

        return res;
      });

      return setEditableBlock(null);
    }

    if (blockData.out) {
      setBlocks(current => {
        const res = [...current, blockData];

        localStorage.setItem("blocks", JSON.stringify(res));

        return res;
      });

      return setEditableBlock(null);
    } else {
      console.error("Problem with blocks output");
    }
  }, [blockData, blocks, setBlocks, setEditableBlock]);

  const handleChangeInput = useCallback(
    ev => {
      const updatedFields = blockData.fields.map((item, fieldIndex) => {
        if (fieldIndex === Number(ev.target.ariaRowIndex)) {
          return {
            ...item,
            value: ev.target.value,
          };
        }

        return item;
      });

      setBlockData({
        ...blockData,
        fields: updatedFields,
      });
    },
    [blockData],
  );

  if (!data) {
    return <div className="blockDetails" style={{ background: "transparent" }} />;
  }

  return (
    <div className="blockDetails">
      <div className="header">
        <div className="badge">{data.label}</div>

        {data.domain && <div className="domain">{data.domain}</div>}
      </div>

      <div className="body">
        {(data.fields ?? []).map((field, index) => {
          if (field.value) {
            return (
              <div className="field" key={field.type}>
                <div className="value">
                  {field.value} {field.symbol}
                </div>
              </div>
            );
          }

          switch (field.type) {
            case "asset_amount":
              return (
                <div className="field" key={field.type}>
                  <input type="number" className="input" onChange={handleChangeInput} aria-rowindex={index} />
                  <div className="label">{field.symbol}</div>
                </div>
              );
            case "time":
              return (
                <div className="field" key={field.type}>
                  <input type="number" className="input" onChange={handleChangeInput} aria-rowindex={index} />
                  <div className="label">secs</div>
                </div>
              );
            case "address":
              return (
                <div className="field" key={field.type}>
                  <div className="label">To</div>
                  <input type="text" className="input" onChange={handleChangeInput} />
                </div>
              );
            case "swap_to":
              return (
                <div className="field" key={field.type}>
                  <div className="label">To</div>
                  <input type="text" className="input" onChange={handleChangeInput} />
                </div>
              );
            default:
              return null;
          }
        })}

        {data.fields && !data.fields.some(field => Boolean(field.value)) && (
          <button onClick={handleAddBlock} className="button">
            Add
          </button>
        )}
      </div>
    </div>
  );
}
