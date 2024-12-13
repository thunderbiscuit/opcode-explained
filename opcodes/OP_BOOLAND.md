# OP_BOOLAND

:::info
**Opcode number:** 154  
**Byte representation:** `0x9a`  
**Short description:** Pop the top two stack items and push 1 if both are nonzero, else push 0.
:::

`OP_BOOLAND` performs a logical AND operation on the top two items on the stack. If both items are non-zero, it pushes `1` (true) onto the stack. If either item is zero (or an empty array), it pushes an empty array (`false`). Both items are interpreted as integers, and must therefore be 4 bytes long or less. If either is above 4 bytes in length, the script is invalid.

### Operation

1. Remove the top two items from the stack:
   - If both items are non-zero, push `1` (`true`).
   - If either item is zero (`[]` or a 0-value integer), push an empty array (`false`).
2. Replace the top two items with the result.

### Notes

- If there are fewer than two items on the stack when `OP_BOOLAND` is executed, the script will fail.

## Examples

### Example 1: Both items are true

```shell
# ASM script
OP_1 OP_1 OP_BOOLAND

# Raw script
51919a

# Stack (before OP_BOOLAND)
1  # top
1

# Stack (after OP_BOOLAND)
1  # true, as both items are non-zero
```

### Example 2: One item is false

```shell
# ASM script
OP_1 OP_0 OP_BOOLAND

# Raw script
51009a

# Stack (before OP_BOOLAND)
0  # top (false)
1

# Stack (after OP_BOOLAND)
[]  # false, as one item was zero
```

### Example 3: Both items are false

```shell
# ASM script
OP_0 OP_0 OP_BOOLAND

# Raw script
00909a

# Stack (before OP_BOOLAND)
0  # top
0

# Stack (after OP_BOOLAND)
[]  # false, as both items were zero
```

### Example 4: Non-empty arrays as true

```shell
# ASM script
OP_PUSHBYTES_2 a4b6 OP_5 OP_BOOLAND

# Raw script
02a4b6559a

# Stack (before OP_BOOLAND)
5
a4b6

# Stack (after OP_BOOLAND)
1
```
