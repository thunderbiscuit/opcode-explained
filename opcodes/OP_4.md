# OP_4
:::info
**Opcode number:** 84  
**Byte representation:** `0x54`  
**Other names:** `OP_PUSHNUM_4`  
**Short Description:** Push the number 4 onto the stack.  
:::

The [`OP_4`](./OP_4.md) opcode will push `0x04` onto the stack. This opcode uses the [minimally encoded integers format](../script/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_4 OP_4

# Raw script
5454

# Final stack
4
4
```

### Example 2
```shell
# ASM script
OP_4 OP_4 OP_ADD

# Raw script
545493

# Final stack
8
```
