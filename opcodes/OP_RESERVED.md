# OP_RESERVED
:::info
**Opcode number:** 80  
**Byte representation:** `0x50`  
**Short description:** Fail the script immediately.
:::

[`OP_RESERVED`](./OP_RESERVED.md) fails the script immediately, but it must be executed (for example it does not render a script invalid if it is in a branch of an if/else statement that doesn't get executed). It is a synonym for [OP_RETURN](./OP_RETURN.md).
