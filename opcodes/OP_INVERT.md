# OP_INVERT
:::info
**Opcode number:** 131  
**Byte representation:** `0x83`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_INVERT`](./OP_INVERT.md) is a disabled opcode in the Bitcoin scripting system.

### Historical Context
Originally, the [`OP_INVERT`](./OP_INVERT.md) opcode was intended to invert all the bits of the top item on the stack. This bitwise operation would flip every 1 to 0 and every 0 to 1 in the binary representation of the number.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, [`OP_INVERT`](./OP_INVERT.md) (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because [`OP_INVERT`](./OP_INVERT.md) is disabled, any script that contains it will result in the transaction being labeled as invalid, regardless of the overall script context.
