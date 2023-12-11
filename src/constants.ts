import { Percent } from '@tendieswap/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x6Df8506831cC904D35fAeCeF6D9D622148b47412'

export const INIT_CODE_HASH = '0x1024e09f849087602dab598936faca98b62a7f4eb84c434316fc8eaa2b4de68e'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
