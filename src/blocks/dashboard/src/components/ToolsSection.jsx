import ObtainedTokens from "./ObtainedTokens";
import Section from "./Section";

import { obtainedTokens } from "../data";
import AllTools from "./AllTools";

export default function ToolsSection() {
  return (
    <Section>
      <ObtainedTokens obtainedTokens={obtainedTokens} />
      <AllTools />
    </Section>

  )
}
