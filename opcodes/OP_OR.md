# OP_OR
:::info
**Opcode number:** 133  
**Byte representation:** `0x85`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_OR` is a disabled opcode in the bitcoin scripting system.

### Historical Context
Originally, `OP_OR` was intended to perform a bitwise OR operation on the top two items on the stack. This operation would take two numbers and produce a new number. In this result, each bit is the logical OR of the corresponding bits in the input numbers.

However, as part of a broader effort to reduce potential vulnerabilities and to simplify bitcoin's scripting language, `OP_OR` was disabled early in bitcoin's history along with several other opcodes.

### Operation
Because `OP_OR` is disabled, any script that includes it will result in the transaction being declared invalid, irrespective of the script's overall context.
