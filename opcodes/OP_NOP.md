# OP_NOP
:::danger
This page would like some review. If you'd like to contribute, take a look at the [source code for this website](https://github.com/thunderbiscuit/opcode-explained)!
:::

:::info
**Opcode number:** 97  
**Byte representation:** `0x61`   
**Short Description:** Does nothing. 
:::

The `OP_NOP` opcode does nothing.

## Examples
### Example 1
```shell
# ASM script
OP_1 OP_NOP OP_1 

# Raw script
516151

# Final stack
1
1
```

### Example 2
```shell
# ASM script
OP_1 OP_1 OP_NOP OP_ADD

# Raw script
51516193

# Final stack
2
```
