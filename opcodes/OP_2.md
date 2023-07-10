# OP_2
:::info
**Opcode number:** 82  
**Byte representation:**  `0x52`  
**Short Description:** Push the number 2 onto the stack.  
:::

The `OP_2` opcode will push `0x02` onto the stack.

## Examples
### Example 1
```shell
# Script
OP_2 OP_2

# Final stack
2
2
```

### Example 2
```shell
# Script
OP_2 OP_2 OP_ADD

# Final stack
4
```
