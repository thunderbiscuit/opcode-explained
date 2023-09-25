# OP_PUSHBYTES_4
:::info
**Opcode number:** 4  
**Byte representation:**  `0x04`  
**Short Description:** Push the next 4 bytes onto the stack. 
:::

The `OP_PUSHBYTES_4` opcode will push the following 4 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# ASM script
OP_PUSHBYTES_4 a4b5c6d7

# Raw script
04a4b5c6d7

# Final stack
a4b5c6d7
```
