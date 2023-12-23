# OP_DIV
:::info
**Opcode number:** 150  
**Byte representation:** `0x96`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_DIV`](./OP_DIV.md) is a disabled opcode in the Bitcoin scripting system.

### Historical Context
[`OP_DIV`](./OP_DIV.md) was initially intended for division operations, specifically to divide the second-to-top stack item by the top stack item.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, [`OP_DIV`](./OP_DIV.md) (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because [`OP_DIV`](./OP_DIV.md) is disabled, any script that contains it will render the transaction invalid regardless of context.
