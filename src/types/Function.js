// @flow

type _ExtractReturn<B, F: (...args: any[]) => B> = B  // eslint-disable-line no-unused-vars
export type ExtractReturn<F> = _ExtractReturn<*, F>