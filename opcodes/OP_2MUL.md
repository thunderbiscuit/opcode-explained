# OP_2MUL
:::info
**Opcode number:** 141  
**Byte representation:** `0x8d`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_2MUL` is a disabled opcode in the Bitcoin scripting system.

### Historical Context
`OP_2MUL` was originally intended for multiplication operations, specifically to multiply the top item on the stack by 2.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, `OP_2MUL` (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because `OP_2MUL` is disabled, any any script that contains it will render the transaction invalid regardless of context.
