# OP_PUSHBYTES_25
:::info
**Opcode number:** 25  
**Byte representation:** `0x19`  
**Short Description:** Push the next 25 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_25`](./OP_PUSHBYTES_25.md) opcode will push the following 25 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_25 a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2

# Raw script
19a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2
```
