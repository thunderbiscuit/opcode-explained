# OP_XOR
:::info
**Opcode number:** 134  
**Byte representation:** `0x86`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_XOR` is a disabled opcode in the bitcoin scripting system.

### Historical Context
Originally designed for Bitcoin's script, the `OP_XOR` opcode was intended to carry out a bitwise XOR (exclusive or) operation on the top two items on the stack. This operation would take two numbers and produce a new number wherein each bit is the result of the logical XOR between the corresponding bits in the input numbers.

However, as part of a broader effort to reduce potential vulnerabilities and to simplify bitcoin's scripting language, `OP_XOR` was disabled early in bitcoin's history along with several other opcodes.

### Operation
Due to its disabled status, any script containing the `OP_XOR` opcode will cause the transaction to be invalidated, regardless of any other conditions or script context.
