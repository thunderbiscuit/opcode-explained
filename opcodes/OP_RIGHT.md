# OP_RIGHT
:::info
**Opcode number:** 129  
**Byte representation:** `0x81`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_RIGHT`](./OP_RIGHT.md) is a disabled opcode in the bitcoin scripting system.

### Historical Context
Initially, the [`OP_RIGHT`](./OP_RIGHT.md) opcode was designed to retain only the rightmost N bytes of a string. During its operation, it would pop two items from the stack: the original string and a byte count. Subsequently, it would push back onto the stack the rightmost bytes of the string, determined by the byte count.

Due to concerns about potential vulnerabilities and the desire to simplify the scripting language, [`OP_RIGHT`](./OP_RIGHT.md) (along with several other string manipulation opcodes) was disabled early in bitcoin's development.

### Operation
Because [`OP_RIGHT`](./OP_RIGHT.md) is disabled, the presence of this opcode in any script will immediately deem the transaction invalid, irrespective of its context.
