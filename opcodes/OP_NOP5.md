# OP_NOP5
:::danger
This page would like some review. If you'd like to contribute, take a look at the [source code for this website](https://github.com/thunderbiscuit/opcode-explained)!
:::

:::info
**Opcode number:** 180  
**Byte representation:** `0xb4`   
**Short Description:** Does nothing. 
:::

The [`OP_NOP5`](./OP_NOP5.md) opcode does nothing.

## Examples
### Example 1
```shell
# ASM script
OP_1 OP_NOP5 OP_1 

# Raw script
51b451

# Final stack
1
1
```

### Example 2
```shell
# ASM script
OP_1 OP_1 OP_NOP5 OP_ADD

# Raw script
5151b493

# Final stack
2
```
