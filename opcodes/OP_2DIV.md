# OP_2DIV
:::info
**Opcode number:** 142  
**Byte representation:** `0x8e`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_2DIV` is a disabled opcode in the Bitcoin scripting system.

### Historical Context
`OP_2DIV` was initially designed to perform division operations by dividing the top item on the stack by 2.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, `OP_2DIV` (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because `OP_2DIV` is disabled, any script that contains it will render the transaction invalid regardless of context.
