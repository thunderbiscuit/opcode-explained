# OP_PUSHBYTES_9
:::info
**Opcode number:** 9  
**Byte representation:** `0x09`  
**Short Description:** Push the next 9 bytes onto the stack. 
:::

The [`OP_PUSHBYTES_9`](./OP_PUSHBYTES_9.md) opcode will push the following 9 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_9 a4b5c6d7e8f90a1b2c

# Raw script
09a4b5c6d7e8f90a1b2c

# Final stack
a4b5c6d7e8f90a1b2c
```
