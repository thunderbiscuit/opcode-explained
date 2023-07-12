# OP_PUSHBYTES_6
:::info
**Opcode number:** 6  
**Byte representation:**  `0x06`  
**Short Description:** Push the next 6 bytes onto the stack. 
:::

The `OP_PUSHBYTES_6` opcode will push the following 6 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Example
```shell
# Script
OP_PUSHBYTES_6 a4b5c6d7e8f9

# Raw script
06a4b5c6d7e8f9

# Final stack
a4b5c6d7e8f9
```
