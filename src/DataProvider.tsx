import {FC, ReactNode, useEffect} from "react";
import db from "./db";

const DataProvider: FC<{children: ReactNode}> = ({children}) => {
  useEffect(() => {
    db.open().catch((error) => {
      console.error("Open DB failed:", error);
    });
    return () => db.close();
  });

  return <>{children}</>;
};

export default DataProvider;
