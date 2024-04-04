import { useState } from "react";
import Icon from "./Icon";

interface Files {
  name: string;
  isFolder: boolean;
  children?: (
    | {
        name: string;
        isFolder: boolean;
        children: {
          name: string;
          isFolder: boolean;
        }[];
      }
    | {
        name: string;
        isFolder: boolean;
        children?: undefined;
      }
  )[];
}

const Folder = ({ files }: { files: Files }) => {
  const [expanded, setIsExpanded] = useState(false);

  console.log(files);

  const getFolderExtension = (name: string) => {
    return name.split(".")[1];
  };

  return (
    <div className='folder'>
      <div>
        <p onClick={() => setIsExpanded(!expanded)}>
          <Icon
            name={getFolderExtension(files.name)}
            style={{ height: "12px", marginRight: "4px", flexShrink: 0 }}
          />
          {files.isFolder && expanded && (
            <Icon
              name={"caretDown"}
              style={{ height: "12px", marginRight: "4px", flexShrink: 0 }}
            />
          )}
          {files.isFolder && !expanded && (
            <Icon
              name={"caretRight"}
              style={{ height: "12px", marginRight: "4px", flexShrink: 0 }}
            />
          )}
          {files.name}
        </p>
        <div style={{ padding: "0 0 0 20px" }}>
          {files?.isFolder &&
            expanded &&
            files?.children.map((data) => {
              return <Folder files={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Folder;
