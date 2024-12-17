# OP_NUMEQUALVERIFY

:::info
**Opcode number:** 157  
**Byte representation:** `0x9d`  
**Short description:** Pop the top two stack items and check are numerically equal; fail the script if they are not.
:::

`OP_NUMEQUALVERIFY` combines the functionality of [`OP_NUMEQUAL`](./OP_NUMEQUAL.md) and an implicit verification step. It compares the top two items on the stack as integers. If they are numerically equal, both items are removed, and the script continues execution. If they are not equal, the script fails immediately.

### Operation

1. Remove the top two items from the stack.
2. Compare them as integers:
   - If they are equal, continue execution.
   - If they are not equal, the script fails immediately.

### Notes
- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- Unlike [`OP_NUMEQUAL`](./OP_NUMEQUAL.md), this opcode does not push a result onto the stack; it either succeeds (continue execution) or fails.
- If there are fewer than two items on the stack, the script will fail.

## Examples

### Example 1: Two equal integers

```shell
# ASM script
OP_7 OP_2 OP_2 OP_NUMEQUALVERIFY

# Raw script
5752529d

# Stack (before OP_NUMEQUALVERIFY)
2  # top
2
7

# Stack (after OP_NUMEQUALVERIFY)
7
```

### Example 2: Two unequal integers (failure)
```shell
# ASM script
OP_2 OP_3 OP_NUMEQUALVERIFY

# Raw script
52539d

# Stack (before OP_NUMEQUALVERIFY)
3  # top
2

# Stack (after OP_NUMEQUALVERIFY)
# Script fails immediately due to inequality
```

### Example 3: Comparing zero with an empty array
```shell
# ASM script
OP_7 OP_PUSHBYTES_1 00 OP_0 OP_NUMEQUALVERIFY

# Raw script
570100009d

# Stack (before OP_NUMEQUALVERIFY)
[]      # top (empty array, treated as zero)
00      # single 0x00 byte, also zero
7

# Stack (after OP_NUMEQUALVERIFY)
7  # items are removed, and execution continues
```
