# OP_NOP1
:::danger
This page would like some review. If you'd like to contribute, take a look at the [source code for this website](https://github.com/thunderbiscuit/opcode-explained)!
:::

:::info
**Opcode number:** 176  
**Byte representation:** `0xb0`   
**Short Description:** Does nothing. 
:::

The [`OP_NOP1`](./OP_NOP1.md) opcode does nothing.

## Examples
### Example 1
```shell
# ASM script
OP_1 OP_NOP1 OP_1 

# Raw script
51b051

# Final stack
1
1
```

### Example 2
```shell
# ASM script
OP_1 OP_1 OP_NOP1 OP_ADD

# Raw script
5151b093

# Final stack
2
```
