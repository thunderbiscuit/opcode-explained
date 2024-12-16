# OP_BOOLOR

:::info
**Opcode number:** 155  
**Byte representation:** `0x9b`  
**Short description:** Pop the top two stack items and push 1 if either is nonzero, else push 0.
:::

`OP_BOOLOR` performs a logical OR operation on the top two items on the stack. If either item is non-zero, it pushes `1` (true) onto the stack. If both items are zero (or empty arrays), it pushes an empty array (`false`). Both items are interpreted as integers, and must therefore be 4 bytes long or less. If either is above 4 bytes in length, the script is invalid.

### Operation

1. Remove the top two items from the stack:
   - If either item is non-zero, push `1` (`true`) onto the stack.
   - If both items are zero (`[]` or a 0-value integer), push an empty array (`false`).
2. Replace the top two items with the result.

### Notes

- If there are fewer than two items on the stack when `OP_BOOLOR` is executed, the script will fail.

## Examples

### Example 1: Both items are true

```shell
# ASM script
OP_1 OP_1 OP_BOOLOR

# Raw script
51919b

# Stack (before OP_BOOLOR)
1  # top
1

# Stack (after OP_BOOLOR)
1  # true, as both items are non-zero
```

#### Example 2: One item is true
```shell
# ASM script
OP_1 OP_0 OP_BOOLOR

# Raw script
51009b

# Stack (before OP_BOOLOR)
0  # top (false)
1

# Stack (after OP_BOOLOR)
1  # true, as one item was non-zero
```

#### Example 3: Both items are false
```shell
# ASM script
OP_0 OP_0 OP_BOOLOR

# Raw script
00909b

# Stack (before OP_BOOLOR)
0  # top
0

# Stack (after OP_BOOLOR)
[]  # false, as both items were zero
```

### Example 4: Non-empty arrays as true

```shell
# ASM script
OP_PUSHBYTES_2 a4b6 OP_5 OP_BOOLAND

# Raw script
02a4b6559b

# Stack (before OP_BOOLAND)
5
a4b6

# Stack (after OP_BOOLAND)
1
```
