# OP_9
:::info
**Opcode number:** 89  
**Byte representation:**  `0x59`  
**Short Description:** Push the number 9 onto the stack.  
:::

The `OP_9` opcode will push `0x09` onto the stack. This opcode uses the [minimally encoded integers format](../overview/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_9 OP_9

# Raw script
5959

# Final stack
9
9
```

### Example 2
```shell
# ASM script
OP_9 OP_9 OP_ADD

# Raw script
595993

# Final stack
18
```
