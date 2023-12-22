# OP_MUL
:::info
**Opcode number:** 149  
**Byte representation:** `0x95`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_MUL`](./OP_MUL.md) is a disabled opcode in the Bitcoin scripting system.

### Historical Context
[`OP_MUL`](./OP_MUL.md) was intended to perform multiplication operations between the two topmost items on the stack.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, [`OP_MUL`](./OP_MUL.md) (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because [`OP_MUL`](./OP_MUL.md) is disabled, any script that contains it will render the transaction invalid regardless of context.
