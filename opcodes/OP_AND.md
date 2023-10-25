# OP_AND
:::info
**Opcode number:** 132  
**Byte representation:** `0x84`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_AND` is a disabled opcode in the bitcoin scripting system.

### Historical Context
Initially, the `OP_AND` opcode was designed to perform a bitwise AND operation on the top two items on the stack. This means it would take two numbers and return a new number, where each bit in the result is the logical AND of the corresponding bits in the input numbers.

However, as part of a broader effort to reduce potential vulnerabilities and to simplify bitcoin's scripting language, `OP_AND` was disabled early in bitcoin's history along with several other opcodes.

### Operation
Because `OP_AND` is disabled, any script that contains it will immediately render the transaction invalid, regardless of other script operations or context.
