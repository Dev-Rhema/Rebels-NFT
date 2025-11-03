import ScrollStack, { ScrollStackItem } from "./components/ScrollStack.jsx";

import React from "react";

function Roadmap() {
  return (
    <div>
      <ScrollStack>
        <ScrollStackItem>
          <h2>Phase 1</h2>
          <p>This is Phase 1</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Phase 2</h2>
          <p>This is Phase 2</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Phase 3</h2>
          <p>This is Phase 3</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Phase 4</h2>
          <p>This is Phase 4</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}

export default Roadmap;
