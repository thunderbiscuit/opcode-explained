# OP_ABS

:::info
**Opcode number:** 144  
**Byte representation:** `0x90`  
**Short description:** Converts the top item on the stack to its absolute value.
:::

`OP_ABS` changes the top item on the stack to its absolute value, effectively removing any negative sign if present. This operation is useful when only the magnitude of a number is needed, regardless of its original sign.

### Operation
1. Take the top item from the stack.
2. If the item is negative, make it positive.
3. Push the result back onto the stack as the new top item.

### Notes
- `OP_ABS` works only on items that can be interpreted as integers, which in Bitcoin Script means byte arrays up to 4 bytes in length.
- If the top item is already positive or zero, applying `OP_ABS` has no effect.
- If the stack is empty when `OP_ABS` is executed, the script will fail.

## Examples

### Example 1

Converting a negative integer to its absolute value:

```shell
# ASM script
OP_1NEGATE OP_ABS

# Raw script
8f90

# Stack (before OP_ABS)
-1  # top

# Stack (after OP_ABS)
1  # result after taking absolute value
```

### Example 2

Applying `OP_ABS` to a positive integer:

```shell
# ASM script
OP_2 OP_ABS

# Raw script
5290

# Stack (before OP_ABS)
2  # top

# Stack (after OP_ABS)
2  # no change, already positive
```
