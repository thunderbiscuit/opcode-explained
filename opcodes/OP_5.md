# OP_5
:::info
**Opcode number:** 85  
**Byte representation:** `0x55`  
**Short Description:** Push the number 5 onto the stack.  
:::

The `OP_5` opcode will push `0x05` onto the stack. This opcode uses the [minimally encoded integers format](../overview/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_5 OP_5

# Raw script
5555

# Final stack
5
5
```

### Example 2
```shell
# ASM script
OP_5 OP_5 OP_ADD

# Raw script
555593

# Final stack
10
```
