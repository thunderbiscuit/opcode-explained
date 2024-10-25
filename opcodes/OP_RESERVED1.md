# OP_RESERVED1

:::info
**Opcode number:** 137  
**Byte representation:** `0x89`  
**Short description:** Fail the script immediately.
:::

`OP_RESERVED1` fails the script immediately, but it must be executed (for example it does not render a script invalid if it is in a branch of an if/else statement that doesn't get executed). It is a synonym for [OP_RETURN](./OP_RETURN.md).
