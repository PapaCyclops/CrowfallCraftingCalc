import {useLiveQuery} from "dexie-react-hooks";
import {useCallback, useMemo} from "react";
import db from "../db";
import ResourceData from "../types/ResourceData";

export default function useResourceData(
  name: string
): [ResourceData, (changes: {have?: number; want?: number}) => Promise<void>] {
  const resourceData = useLiveQuery(
    () => db.resources.where({name}).first(),
    [name]
  );
  const updateResourceData = useCallback(
    async (changes: {have?: number; want?: number}) => {
      const isNew = !Boolean(await db.resources.get(name));
      if (isNew)
        await db.resources.add({
          name: name,
          have: changes.have || 0,
          want: changes.want || 0,
          need: 0
        });
      else await db.resources.update(name, changes);
    },
    [name]
  );

  return useMemo(
    () => [
      resourceData || ({name, have: 0, want: 0, need: 0} as ResourceData),
      updateResourceData
    ],
    [name, resourceData, updateResourceData]
  );
}
