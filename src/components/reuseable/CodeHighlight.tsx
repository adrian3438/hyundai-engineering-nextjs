import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

// =================================================
interface CodeHighlightProps {
  children?: any;
  language: string;
}
// =================================================

export default function CodeHighlight({ children, language }: CodeHighlightProps) {
  return (
    <Prism
      wrapLines
      wrapLongLines
      style={dracula}
      language={language}
      customStyle={{ padding: "2rem", margin: 0, borderRadius: "0 0 .4rem .4rem" }}>
      {children}
    </Prism>
  );
}
