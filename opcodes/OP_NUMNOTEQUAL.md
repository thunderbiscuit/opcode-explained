# OP_NUMNOTEQUAL

:::info
**Opcode number:** 158  
**Byte representation:** `0x9e`  
**Short description:** Pop the top two stack items and push 0 if both are numerically equal, else push 1.
:::

`OP_NUMNOTEQUAL` compares the top two items on the stack as integers. If they are not numerically equal, it pushes `1` (`true`) onto the stack. If they are equal, it pushes an empty array (`false`). Both items are removed from the stack after the comparison.

### Operation

1. Remove the top two items from the stack.
2. Compare them as integers:
   - If they are **not equal**, push `1` (`true`) onto the stack.
   - If they are equal, push an empty array (`false`) onto the stack.
3. Both original items are removed.

### Notes

- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as signed integers.
- An empty array (`[]`) is treated as `0` when compared.
- If there are fewer than two items on the stack when `OP_NUMNOTEQUAL` is executed, the script will fail.

## Examples

### Example 1: Two unequal integers

```shell
# ASM script
OP_2 OP_3 OP_NUMNOTEQUAL

# Raw script
52539e

# Stack (before OP_NUMNOTEQUAL)
3  # top
2

# Stack (after OP_NUMNOTEQUAL)
1  # true, as 2 != 3
```

### Example 2: Two equal integers

```shell
# ASM script
OP_2 OP_2 OP_NUMNOTEQUAL

# Raw script
52529e

# Stack (before OP_NUMNOTEQUAL)
2  # top
2

# Stack (after OP_NUMNOTEQUAL)
[]  # false, as 2 == 2
```

### Example 3: Comparing zero with an empty array

```shell
# ASM script
OP_0 OP_PUSHBYTES_1 00 OP_NUMNOTEQUAL

# Raw script
0001009e

# Stack (before OP_NUMNOTEQUAL)
00  # top (single zero byte)
[]  # empty array

# Stack (after OP_NUMNOTEQUAL)
[]  # false, as 0 == [0x00]
```
