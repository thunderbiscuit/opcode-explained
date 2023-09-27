# OP_7
:::info
**Opcode number:** 87  
**Byte representation:**  `0x57`  
**Short Description:** Push the number 7 onto the stack.  
:::

The `OP_7` opcode will push `0x07` onto the stack. This opcode uses the [minimally encoded integers format](../overview/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_7 OP_7

# Raw script
5757

# Final stack
7
7
```

### Example 2
```shell
# ASM script
OP_7 OP_7 OP_ADD

# Raw script
575793

# Final stack
14
```
