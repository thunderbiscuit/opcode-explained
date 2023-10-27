# OP_MOD
:::info
**Opcode number:** 151  
**Byte representation:** `0x97`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_MOD` is a disabled opcode in the bitcoin scripting system.

### Historical Context
`OP_MOD` was designed to perform a modulus operation, which would find the remainder after dividing the second-to-top stack item by the top stack item.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, `OP_MOD` (along with several other opcodes) was disabled early in bitcoin's development.

### Operation
Because `OP_MOD` is disabled, any script that contains it will render the transaction invalid regardless of context.
