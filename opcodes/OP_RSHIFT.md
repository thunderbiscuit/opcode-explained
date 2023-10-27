# OP_RSHIFT
:::info
**Opcode number:** 153  
**Byte representation:** `0x99`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_RSHIFT` is a disabled opcode in the Bitcoin scripting system.

### Historical Context
`OP_RSHIFT` was designed to perform bitwise right shift operations. This operation would shift the bits of the top stack item to the right by the number of positions specified by the second-to-top stack item.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, `OP_RSHIFT` (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because `OP_RSHIFT` is disabled, any script that contains it will render the transaction invalid regardless of context.
