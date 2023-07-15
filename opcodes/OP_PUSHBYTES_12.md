# OP_PUSHBYTES_12
:::info
**Opcode number:** 12  
**Byte representation:**  `0x0c`  
**Short Description:** Push the next 12 bytes onto the stack. 
:::

The `OP_PUSHBYTES_12` opcode will push the following 12 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_12 a4b5c6d7e8f90a1b2c3d4e5f

# Raw script
0ca4b5c6d7e8f90a1b2c3d4e5f

# Final stack
a4b5c6d7e8f90a1b2c3d4e5f
```
