# OP_LSHIFT
:::info
**Opcode number:** 152  
**Byte representation:** `0x98`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_LSHIFT`](./OP_LSHIFT.md) is a disabled opcode in the Bitcoin scripting system.

### Historical Context
[`OP_LSHIFT`](./OP_LSHIFT.md) was intended for bitwise left shift operations, which would shift the bits of the top stack item to the left by a number of positions specified by the second-to-top stack item.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, [`OP_LSHIFT`](./OP_LSHIFT.md) (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because [`OP_LSHIFT`](./OP_LSHIFT.md) is disabled, any script that contains it will render the transaction invalid regardless of context.
