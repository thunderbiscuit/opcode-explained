# OP_NEGATE

:::info
**Opcode number:** 143  
**Byte representation:** `0x8f`  
**Short description:** Multiply the top stack item by -1 in place.
:::

`OP_NEGATE` changes the sign of the top item on the stack. If the item is positive, it becomes negative; if it is negative, it becomes positive.

### Operation
1. Take the top item from the stack.
2. Change its sign (positive becomes negative, and negative becomes positive).
3. Push the result back onto the stack as the new top item.

### Notes
- `OP_NEGATE` works only on items that can be interpreted as integers, which in Bitcoin Script means byte arrays up to 4 bytes in length.
- If the top item is zero, applying `OP_NEGATE` has no effect (zero remains zero).
- If there are no items on the stack when `OP_NEGATE` is executed, the script will fail.

### Example

Negating a positive integer:

```shell
# ASM script
OP_2 OP_NEGATE

# Raw script
528f

# Stack (before OP_NEGATE)
2  # top

# Stack (after OP_NEGATE)
-2  # result after negation
```
