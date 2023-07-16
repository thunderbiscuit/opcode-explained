# OP_PUSHBYTES_22
:::info
**Opcode number:** 22  
**Byte representation:**  `0x16`  
**Short Description:** Push the next 22 bytes onto the stack. 
:::

The `OP_PUSHBYTES_22` opcode will push the following 22 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_22 a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9d

# Raw script
16a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9d

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9d
```
