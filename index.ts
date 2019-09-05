import thrush from "@unction/thrush";
import reduceValues from "@unction/reducevalues";
import mapValues from "@unction/mapvalues";
import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey";
import nestedApply from "@unction/nestedapply";

import {FoldFunctionType} from "./types";
import {TreeType} from "./types";

export default function treeify<A, B, C> (foldingFunctions: Array<FoldFunctionType<A, B>>) {
  const [initial, ...remaining] = foldingFunctions;


  return function treeifyIterators (array: Array<A>): TreeType<C> {
    return reduceValues(
      thrush
    )(
      initial(array)
    )(
      mapValuesWithValueKey(
        nestedApply(mapValues)
      )(
        remaining
      )
    );
  };
}
