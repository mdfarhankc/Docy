import MarkDown from "@/components/markdown";
import { DocumentsServerdatas } from "@/lib/type";

interface EditorBlockViewProps {
  document: DocumentsServerdatas;
}

const EditorBlockView = ({
  document: { title, description },
}: EditorBlockViewProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {description && (
        <div className="rounded-md border-2 border-border p-3">
          <div>
            <MarkDown>{description}</MarkDown>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorBlockView;
