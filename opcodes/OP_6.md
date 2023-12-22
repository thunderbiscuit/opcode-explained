# OP_6
:::info
**Opcode number:** 86  
**Byte representation:** `0x56`  
**Other names:** `OP_PUSHNUM_6`  
**Short Description:** Push the number 6 onto the stack.  
:::

The [`OP_6`](./OP_6.md) opcode will push `0x06` onto the stack. This opcode uses the [minimally encoded integers format](../script/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_6 OP_6

# Raw script
5656

# Final stack
6
6
```

### Example 2
```shell
# ASM script
OP_6 OP_6 OP_ADD

# Raw script
565693

# Final stack
12
```
