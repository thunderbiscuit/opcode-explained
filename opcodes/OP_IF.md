# OP_IF
:::info
**Opcode number:** 99  
**Byte representation:** `0x63`  
**Short description:** Pop and execute the next statements if a nonzero element was popped.
:::

[`OP_IF`](./OP_IF.md) is used to perform conditional execution. Scripts in Bitcoin can contain branches—parts of the script that are executed only if certain conditions are met. The [`OP_IF`](./OP_IF.md) opcode allows the script to evaluate a value and conditionally execute the following script commands based on that value.

### Operation
1. Pop the top stack item.
2. If the item is not `0`, execute the following opcodes until an [`OP_ELSE`](./OP_ELSE.md) or [`OP_ENDIF`](./OP_ENDIF.md) is encountered.
3. If the item is `0`, skip the following opcodes until an [`OP_ELSE`](./OP_ELSE.md) or [`OP_ENDIF`](./OP_ENDIF.md) is encountered.

You'll see it used like so:
```txt
<condition> OP_IF
    <script if condition is true>
OP_ELSE
    <script if condition is false>
OP_ENDIF
```

Where `<condition>` is some operation or value that will leave a `0` or non-`0` value on top of the stack.

## Notes
- Bitcoin script does not support loop structures, so all conditional logic is based on branches.
- The script will fail and not complete if there is no matching [`OP_ENDIF`](./OP_ENDIF.md) for an [`OP_IF`](./OP_IF.md).

## Examples
### Example 1
The following script would leave `2` on the stack as the condition (`1`) is true.
```shell
# ASM script
OP_1 OP_IF OP_2 OP_ENDIF

# Raw script
51635268

# Final stack
2
```

## Example 2
The following script would leave `3` on the stack as the condition (`0`) is false.
```shell
# ASM script
OP_0 OP_IF OP_2 OP_ELSE OP_3 OP_ENDIF

# Raw script
006352675368

# Final stack
3
```
