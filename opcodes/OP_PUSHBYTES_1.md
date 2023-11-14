# OP_PUSHBYTES_1
:::info
**Opcode number:** 1  
**Byte representation:** `0x01`  
**Short Description:** Push the next byte onto the stack. 
:::

The `OP_PUSHBYTES_1` opcode will push the following byte onto the stack. For the bytes `0x01` to `0x10` it is more efficient (and required by standardness rules) to use opcodes `OP_1` to `OP_16`, and for the byte `0x81` to use `OP_1NEGATE` (see [minimal push operations](../script/push.md#minimal-push-operations)).

## Example
```shell
# ASM script
OP_PUSHBYTES_1 a4

# Raw script
01a4

# Final stack
a4
```
