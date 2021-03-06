// @flow

import {createStore, createApi} from 'effector'
import {mediaMatcher} from '../mediaMatcher'

export type Tab =
  | 'graphite'
  | 'dom'
  | 'share'
  | 'editor'
  | 'outline'
  | 'settings'
  | 'errors'

export const isDesktopChanges = mediaMatcher('(min-width: 700px)')

export const tab = createStore<Tab>(
  isDesktopChanges.getState() ? 'dom' : 'editor',
)

export const tabApi = createApi(tab, {
  showOutline: () => 'outline',
  showEditor: () => 'editor',
  showGraphite: () => 'graphite',
  showDOM: () => 'dom',
  showShare: () => 'share',
  showSettings: () => 'settings',
  showErrors: () => 'errors',
})

tab.on(isDesktopChanges, (state, isDesktop) => {
  if (state === 'editor' && isDesktop) return 'dom'
  if (state === 'outline' && isDesktop) return 'dom'
  return state
})
