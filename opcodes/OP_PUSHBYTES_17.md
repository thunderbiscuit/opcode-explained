# OP_PUSHBYTES_17
:::info
**Opcode number:** 17  
**Byte representation:** `0x11`  
**Short Description:** Push the next 17 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_17`](./OP_PUSHBYTES_17.md) opcode will push the following 17 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_17 a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4

# Raw script
11a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4
```
