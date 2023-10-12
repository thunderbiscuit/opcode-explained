# OP_PUSHBYTES_14
:::info
**Opcode number:** 14  
**Byte representation:** `0x0e`  
**Short Description:** Push the next 14 bytes onto the stack. 
:::

The `OP_PUSHBYTES_14` opcode will push the following 14 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_14 a4b5c6d7e8f90a1b2c3d4e5fa0b1

# Raw script
0ea4b5c6d7e8f90a1b2c3d4e5fa0b1

# Final stack
a4b5c6d7e8f90a1b2c3d4e5fa0b1
```
