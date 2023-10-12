# OP_PUSHBYTES_72
:::info
**Opcode number:** 72  
**Byte representation:** `0x48`  
**Short description:** Push the next 72 bytes onto the stack. 
:::

The `OP_PUSHBYTES_72` opcode will push the following 72 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_72 a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b

# Raw script
48a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1c2d3e4f56a7b8c9da0b1c2d3e4f57a8b9c0d1e2fa3b4c5d6e7f89a0b1c2d3e4fa5b6c7d8e9f01a2b3c4d5e6fa7b8c90d1e2fa4b5c6d7e8f92a3b
```
