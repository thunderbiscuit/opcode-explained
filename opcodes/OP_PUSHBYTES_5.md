# OP_PUSHBYTES_5
:::info
**Opcode number:** 5  
**Byte representation:** `0x05`  
**Short Description:** Push the next 5 bytes onto the stack. 
:::

The `OP_PUSHBYTES_5` opcode will push the following 5 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_5 a4b5c6d7e8

# Raw script
05a4b5c6d7e8

# Final stack
a4b5c6d7e8
```
