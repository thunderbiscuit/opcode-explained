# OP_2
:::info
**Opcode number:** 82  
**Byte representation:** `0x52`  
**Short Description:** Push the number 2 onto the stack.  
:::

The `OP_2` opcode will push `0x02` onto the stack. This opcode uses the [minimally encoded integers format](../script/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_2 OP_2

# Raw script
5252

# Final stack
2
2
```

### Example 2
```shell
# ASM script
OP_2 OP_2 OP_ADD

# Raw script
525293

# Final stack
4
```
