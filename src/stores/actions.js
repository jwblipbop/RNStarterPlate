export const fetchStatusEnum = {
  none: 'none',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
}
export const action = (type, payload = {}) => ({ type, ...payload })
export const createRequestTypes = base => ({
  START: base,
  RESET: `${base}_RESET`,
  REQUEST: `${base}_REQUEST`,
  SUCCESS: `${base}_SUCCESS`,
  FAILURE: `${base}_FAILURE`,
})
