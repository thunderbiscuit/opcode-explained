# OP_ADD
:::info
**Opcode number:** 147  
**Byte representation:**  `0x93`  
**Short Description:** Pop two stack items and push their sum.  
:::

`OP_ADD` adds two numbers together and returns their sum on the stack.
<br>

The execution of the `OP_ADD`` opcode involves three steps:

1. Pop the top item from the stack.
2. Pop the next top item from the stack.
3. Add these two items together, and push the result back onto the stack.

## Examples
```shell
# Script
OP_2 OP_3 OP_ADD

# Final stack
5
```

```shell
# Script
OP_2 OP_3 OP_ADD OP_4 OP_EQUAL

# Final stack
0
```
