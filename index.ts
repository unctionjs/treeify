import thrush from "@unction/thrush";
import reduceValues from "@unction/reducevalues";
import mapValues from "@unction/mapvalues";
import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey";
import nestedApply from "@unction/nestedapply";
export default function treeify (folders) {
  const [initial, ...remaining] = folders;


  return function treeifyIterators (records) {
    return reduceValues(thrush)(initial(records))(mapValuesWithValueKey(nestedApply(mapValues))(remaining));
  };
}
