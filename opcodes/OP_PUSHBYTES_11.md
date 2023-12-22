# OP_PUSHBYTES_11
:::info
**Opcode number:** 11  
**Byte representation:** `0x0b`  
**Short Description:** Push the next 11 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_11`](./OP_PUSHBYTES_11.md) opcode will push the following 11 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_11 a4b5c6d7e8f90a1b2c3d4e

# Raw script
0ba4b5c6d7e8f90a1b2c3d4e

# Final stack
a4b5c6d7e8f90a1b2c3d4e
```
