# OP_PUSHBYTES_8
:::info
**Opcode number:** 8  
**Byte representation:** `0x08`  
**Short Description:** Push the next 8 bytes onto the stack. 
:::

The `OP_PUSHBYTES_8` opcode will push the following 8 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_8 a4b5c6d7e8f90a1b

# Raw script
08a4b5c6d7e8f90a1b

# Final stack
a4b5c6d7e8f90a1b
```
