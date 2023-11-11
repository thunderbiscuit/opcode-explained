# OP_1
:::info
**Opcode number:** 81  
**Byte representation:** `0x51`  
**Other names:** `OP_TRUE`, `OP_PUSHNUM_1`  
**Short Description:** Push the number 1 onto the stack. 
:::

The `OP_1` opcode, which corresponds to the byte `0x51`, pushes the number 1 onto the stack. `OP_1`` is a fundamental opcode in Bitcoin Script, enabling a variety of operations and serving as a building block for more complex scripts.

## Examples
### Example 1
```shell
# ASM script
OP_1 OP_1

# Raw script
5151

# Final stack
1
1
```

### Example 2
```shell
# ASM script
OP_1 OP_1 OP_ADD

# Raw script
515193

# Final stack
2
```
