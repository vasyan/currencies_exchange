import { createSelector } from 'reselect'
import {
  selectIsOnFetch,
  selectHasError,
  selectIsInitialFetched
} from './rates'

export const selectShowError = createSelector(
  [selectIsInitialFetched, selectHasError, selectIsOnFetch],
  (isFetched, hasError, isOnFetch) => {
    return !isFetched && hasError && !isOnFetch
  }
)

export const selectIsOnLoading = createSelector(
  [selectIsInitialFetched, selectIsOnFetch],
  (isFetched, isOnFetch) => {
    return !isFetched && isOnFetch
  }
)
