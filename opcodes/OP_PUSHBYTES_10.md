# OP_PUSHBYTES_10
:::info
**Opcode number:** 10  
**Byte representation:** `0x0a`  
**Short Description:** Push the next 10 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_10`](./OP_PUSHBYTES_10.md) opcode will push the following 10 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_10 a4b5c6d7e8f90a1b2c3d

# Raw script
0aa4b5c6d7e8f90a1b2c3d

# Final stack
a4b5c6d7e8f90a1b2c3d
```
