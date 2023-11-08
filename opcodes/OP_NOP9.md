# OP_NOP9
:::danger
This page would like some review. If you'd like to contribute, take a look at the [source code for this website]!
:::

:::info
**Opcode number:** 184  
**Byte representation:** `0xb8`   
**Short Description:** Does nothing. 
:::

The `OP_NOP9` opcode does nothing. It does not change the state of the stack or any of the script's execution conditions.

## Examples
### Example 1
```shell
# ASM script
OP_1 OP_NOP9 OP_1 

# Raw script
51b851

# Final stack
1
1
```

### Example 2
```shell
# ASM script
OP_1 OP_1 OP_NOP9 OP_ADD

# Raw script
5151b893

# Final stack
2
```

[source code for this website]: https://github.com/thunderbiscuit/opcode-explained
