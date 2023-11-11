# OP_3
:::info
**Opcode number:** 83  
**Byte representation:** `0x53`  
**Other names:** `OP_PUSHNUM_3`  
**Short Description:** Push the number 3 onto the stack.  
:::

The `OP_3` opcode will push `0x03` onto the stack. This opcode uses the [minimally encoded integers format](../script/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_3 OP_3

# Raw script
5353

# Final stack
3
3
```

### Example 2
```shell
# ASM script
OP_3 OP_3 OP_ADD

# Raw script
535393

# Final stack
6
```
