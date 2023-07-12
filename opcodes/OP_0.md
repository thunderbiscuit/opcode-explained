# OP_0
:::info
**Opcode number:** 0  
**Byte representation:**  `0x00`  
**Other names:** `OP_FALSE`
**Short Description:** Push an empty byte array onto the stack.  
:::

The `OP_0` opcode, which corresponds to the byte `0x00`, doesn't push the numeric value `0` onto the stack; rather, it pushes a zero-length byte array.

## Examples
### Example 1
```shell
# Script
OP_0 OP_0

# Raw script
0000

# Final stack
(empty array)
(empty array)
```

### Example 2
```shell
# Script
OP_0 OP_0 OP_ADD

# Raw script
000093

# Final stack
(empty array)
```
