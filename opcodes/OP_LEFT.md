# OP_LEFT
:::info
**Opcode number:** 128  
**Byte representation:** `0x80`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_LEFT`](./OP_LEFT.md) is a disabled opcode in the Bitcoin scripting system.

### Historical Context
Originally, the [`OP_LEFT`](./OP_LEFT.md) opcode was intended to keep only the leftmost N bytes of a string. The operation would pop two items from the stack: the original string and a byte count. It would then push back onto the stack the leftmost bytes of the string, as specified by the byte count.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, [`OP_LEFT`](./OP_LEFT.md) (along with several other string manipulation opcodes) was disabled early in bitcoin's development.

### Operation
Because [`OP_LEFT`](./OP_LEFT.md) is disabled, any script that contains it will render the transaction invalid regardless of context.
