# OP_ADD
:::info
**Opcode number:** 147  
**Byte representation:** `0x93`  
**Short Description:** Pop two stack items and push their sum.  
:::

`OP_ADD` adds two numbers together and returns their sum on the stack.

The execution of the `OP_ADD` opcode involves three steps:
1. Pop the top item from the stack.
2. Pop the next top item from the stack.
3. Add these two items together, and push the result back onto the stack.

## Examples
```shell
# ASM script
OP_2 OP_3 OP_ADD

# Raw script
525393

# Final stack
5
```

```shell
# ASM script
OP_2 OP_3 OP_ADD OP_4 OP_EQUAL

# Raw script
5253935487

# Final stack
0
```
