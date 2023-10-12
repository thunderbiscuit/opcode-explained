# OP_PUSHBYTES_3
:::info
**Opcode number:** 3  
**Byte representation:** `0x03`  
**Short Description:** Push the next 3 bytes onto the stack. 
:::

The `OP_PUSHBYTES_3` opcode will push the following 3 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_3 a4b5c6

# Raw script
03a4b5c6

# Final stack
a4b5c6
```
