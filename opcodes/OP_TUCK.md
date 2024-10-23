# OP_TUCK

:::info
**Opcode number:** 125  
**Byte representation:** `0x7d`  
**Short description:** Copy the top item and insert it below the second item.
:::

`OP_TUCK` is used to duplicate the top item on the stack and insert the duplicate below the second item. This effectively "tucks" the top item into the third position while leaving a copy of it on the top.

### Operation

1. Copy the top item on the stack.
2. Insert the copied item below the second item (i.e., into the third position).

### Notes

- `OP_TUCK` is useful when you need to use the top stack item twice, both at the top and immediately below the second item.
- If there are fewer than two items on the stack when `OP_TUCK` is executed, the script will fail.

## Example

Tucking the top item into the second position:

```shell
# ASM script
OP_1 OP_2 OP_3 OP_TUCK

# Raw script
5152537d

# Stack (before OP_TUCK)
3
2
1

# Stack (after OP_TUCK)
3
2
3 # tucked below the 2nd item
1
```
