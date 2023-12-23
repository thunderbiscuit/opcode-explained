# OP_CAT
:::info
**Opcode number:** 126  
**Byte representation:** `0x7e`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_CAT`](./OP_CAT.md) is a disabled opcode in the bitcoin scripting system.

### Operation
Because [`OP_CAT`](./OP_CAT.md) is disabled, any script that contains it will cause the transaction to be invalid regardless of context. This opcode was originally intended to concatenate two strings but due to concerns about potential vulnerabilities, it was disabled early in bitcoin's history.
