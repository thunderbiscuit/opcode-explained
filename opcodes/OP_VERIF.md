# OP_VERIF
:::info
**Opcode number:** 101  
**Byte representation:** `0x65`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

`OP_VERIF` is a disabled opcode in the Bitcoin scripting system.

### Operation
Because this opcode is disabled, any script that contains it will cause the transaction to be invalid regardless of context.
