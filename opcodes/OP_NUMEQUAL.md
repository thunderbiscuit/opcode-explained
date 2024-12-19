# OP_NUMEQUAL

:::info
**Opcode number:** 156  
**Byte representation:** `0x9c`  
**Short description:** Pop the top two stack items and push 1 if both are numerically equal, else push 0.
:::

`OP_NUMEQUAL` compares the top two items on the stack as integers. If they are numerically equal, it pushes `1` (`true`) onto the stack. If they are not equal, it pushes an empty array (`false`). Both items are removed from the stack after the comparison.

### Operation

1. Take the top two items from the stack.
2. Compare them as integers:
   - If they are equal, push `1` (`true`) onto the stack.
   - If they are not equal, push an empty array (`false`) onto the stack.
3. Both original items are removed.

### Notes

- Both items must be valid integers. Bitcoin Script interprets byte arrays up to **4 bytes** as integers.
- If there are fewer than two items on the stack when `OP_NUMEQUAL` is executed, the script will fail.

## Examples

### Example 1: Two equal integers

```shell
# ASM script
OP_2 OP_2 OP_NUMEQUAL

# Raw script
52529c

# Stack (before OP_NUMEQUAL)
2  # top
2

# Stack (after OP_NUMEQUAL)
1
```

### Example 2: Two unequal integers

```shell
# ASM script
OP_2 OP_3 OP_NUMEQUAL

# Raw script
52539c

# Stack (before OP_NUMEQUAL)
3  # top
2

# Stack (after OP_NUMEQUAL)
[]
```

### Example 3: Comparing zero with an empty array

```shell
# ASM script
OP_PUSHBYTES_1 00 OP_0 OP_NUMEQUAL

# Raw script
0100009c

# Stack (before OP_NUMEQUAL)
[]  # top
0

# Stack (after OP_NUMEQUAL)
1  # true, as both are zero
```
