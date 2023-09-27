# OP_8
:::info
**Opcode number:** 88  
**Byte representation:**  `0x58`  
**Short Description:** Push the number 8 onto the stack.  
:::

The `OP_8` opcode will push `0x08` onto the stack. This opcode uses the [minimally encoded integers format](../overview/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_8 OP_8

# Raw script
5858

# Final stack
8
8
```

### Example 2
```shell
# ASM script
OP_8 OP_8 OP_ADD

# Raw script
585893

# Final stack
16
```
