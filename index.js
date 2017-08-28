import thrush from "@unction/thrush"
import reduceValues from "@unction/reducevalues"
import mapValues from "@unction/mapvalues"
import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey"
import nestedApply from "@unction/nestedapply"

export default function treeify (folders: Array<(any => FunctorType => FunctorType)>): Function {
  const [initial, ...remaining] = folders

  return function treeifyIterators (records: Array<FunctorType>): FunctorType {
    return reduceValues(
      thrush
    )(
      initial(records)
    )(
      mapValuesWithValueKey(
        nestedApply(mapValues)
      )(
        remaining
      )
    )
  }
}
