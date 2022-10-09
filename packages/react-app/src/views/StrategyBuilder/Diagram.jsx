import React, { useEffect, useRef } from "react";
import createEngine, { DefaultLinkModel, DefaultNodeModel, DiagramModel } from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";

export default function Diagram() {
  const engine = useRef();

  useEffect(() => {
    // create an instance of the engine with all the defaults
    engine.current = createEngine();

    // node 1
    const node1 = new DefaultNodeModel({
      name: "Node 1",
      color: "rgb(0,192,255)",
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort("Out");

    // node 2
    const node2 = new DefaultNodeModel({
      name: "Node 1",
      color: "rgb(0,192,255)",
    });
    node2.setPosition(100, 100);
    let port2 = node2.addOutPort("Out");

    // link them and add a label to the link
    const link = port1.link < DefaultLinkModel > port2;
    link.addLabel("Hello World!");

    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    engine.current.setModel(model);
  }, []);

  return <CanvasWidget engine={engine.current} />;
}
