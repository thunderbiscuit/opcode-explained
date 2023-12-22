# OP_PUSHBYTES_24
:::info
**Opcode number:** 24  
**Byte representation:** `0x18`  
**Short Description:** Push the next 24 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_24`](./OP_PUSHBYTES_24.md) opcode will push the following 24 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_24 a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1

# Raw script
18a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1
```
