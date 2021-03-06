//@flow

/*
 * People assume that time is a strict progression of cause to effect,
 * but actually from a non-linear, non-subjective viewpoint -
 * it's more like a big ball
 */

export {combine, combine as createStoreObject} from './combine'
export {sample} from './sample'
export {split} from './split'
export {merge} from './merge'
export {forward} from './forward'
export {fromObservable} from './fromObservable'
export {createDomain} from './createDomain'
export {createEffect} from './createEffect'
export {createStore, createEvent} from './createUnit'
export {withRegion} from './region'
export {restore, restoreEvent, restoreEffect, restoreObject} from './restore'
export {setStoreName} from './naming'
export {createApi} from './createApi'
export {step} from './typedef'
export {is} from './is'
export {createNode} from './createNode'
export {clearNode} from './clearNode'
export {launch} from './kernel'
export {version} from './flags'
export {guard} from './guard'
export {attach} from './attach'
//eslint-disable-next-line
export * as blocks from './blocks'
//eslint-disable-next-line
export * as Kind from './kind'
