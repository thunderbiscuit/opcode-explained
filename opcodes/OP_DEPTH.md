# OP_DEPTH

:::info
**Opcode number:** 116  
**Byte representation:** `0x74`  
**Short description:** Push the number of items currently on the stack onto the stack.
:::

[`OP_DEPTH`](./OP_DEPTH.md) is used to determine the number of items on the stack and push that count onto the stack as a new item.

### Operation

1. Count the number of items currently on the stack.
2. Push that count (as a number) onto the stack.

### Notes

- This opcode is useful when you need to know the size of the stack, for example, before performing operations that require a certain number of stack items.
- The value pushed by `OP_DEPTH` does not affect the other items on the stack.

## Examples

### Example 1

Pushing the stack size when there are three items:

```shell
# ASM script
OP_1 OP_2 OP_3 OP_DEPTH

# Raw script
51525374

# Stack (before OP_DEPTH)
3
2
1

# Stack (after OP_DEPTH)
3  # depth count
3
2
1
```

### Example 2

Pushing the stack size when there are no items:

```shell
# ASM script
OP_DEPTH

# Raw script
74

# Stack (before OP_DEPTH)
(empty stack)

# Stack (after OP_DEPTH)
0  # depth count
```

### Example 3

```shell
# ASM script
OP_0 OP_0 OP_0 OP_DEPTH

# Raw script
00000074

# Stack (before OP_DEPTH)
(empty byte array)
(empty byte array)
(empty byte array)

# Stack (after OP_DEPTH)
3  # depth count
(empty byte array)
(empty byte array)
(empty byte array)
```
