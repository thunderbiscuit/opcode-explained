# OP_VERNOTIF
:::info
**Opcode number:** 102  
**Byte representation:** `0x66`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_VERNOTIF`](./OP_VERNOTIF.md) is a disabled opcode in the Bitcoin scripting system.

### Operation
Because this opcode is disabled, any script that contains it will cause the transaction to be invalid regardless of context.
