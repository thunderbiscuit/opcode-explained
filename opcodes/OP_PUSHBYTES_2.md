# OP_PUSHBYTES_2
:::info
**Opcode number:** 2  
**Byte representation:**  `0x02`  
**Short Description:** Push the next 2 bytes onto the stack. 
:::

The `OP_PUSHBYTES_2` opcode will push the following 2 bytes onto the stack. It's part of a group of opcodes that push a specific number of bytes onto the stack, from [OP_PUSHBYTES_1](./OP_PUSHBYTES_1.md) to [OP_PUSHBYTES_75](./OP_PUSHBYTES_75.md).

## Examples
### Example 1
```shell
# ASM script
OP_PUSHBYTES_2 a4b5

# Raw script
02a4b5

# Final stack
a4b5
```

### Example 2
```shell
# ASM script
OP_PUSHBYTES_2 a4b5 OP_PUSHBYTES_2 c6d7

# Raw script
02a4b502c6d7

# Final stack
c6d7
a4b5
```
