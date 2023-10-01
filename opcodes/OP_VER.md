# OP_VER
:::info
**Opcode number:** 98  
**Byte representation:**  `0x62`  
**Short description:** Fail the script immediately.
:::

`OP_VER` fails the script immediately, but it must be executed (it does not render a script invalid if it is in a branch of an if/else statement that doesn't get executed). It is a synonym for [OP_RETURN](./OP_RETURN.md).
