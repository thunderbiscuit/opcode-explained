# OP_PUSHBYTES_7
:::info
**Opcode number:** 7  
**Byte representation:** `0x07`  
**Short Description:** Push the next 7 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_7`](./OP_PUSHBYTES_7.md) opcode will push the following 7 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_7 a4b5c6d7e8f90a

# Raw script
07a4b5c6d7e8f90a

# Final stack
a4b5c6d7e8f90a
```
