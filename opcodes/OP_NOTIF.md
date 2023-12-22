# OP_NOTIF
:::info
**Opcode number:** 100  
**Byte representation:** `0x64`  
**Short description:** Pop and execute the next statements if a zero element was popped.
:::

[`OP_NOTIF`](./OP_NOTIF.md) is used to perform conditional execution, similar to [`OP_IF`](./OP_IF.md) but operates inversely. Scripts will execute the next segment if a zero element is popped from the stack.

### Operation
1. Pop the top stack item.
2. If the item is `0`, execute the following opcodes until an [`OP_ELSE`](./OP_ELSE.md) or [`OP_ENDIF`](./OP_ENDIF.md) is encountered.
3. If the item is non-`0`, skip the following opcodes until an [`OP_ELSE`](./OP_ELSE.md) or [`OP_ENDIF`](./OP_ENDIF.md) is encountered.

You'll see it used like so:
```txt
<condition> OP_NOTIF
    <script if condition is false>
OP_ELSE
    <script if condition is true>
OP_ENDIF
```

Where `<condition>` is some operation or value that will leave a `0` or non-`0` value on top of the stack.

## Notes
- As with [`OP_IF`](./OP_IF.md), if there's no matching [`OP_ENDIF`](./OP_ENDIF.md) for an [`OP_NOTIF`](./OP_NOTIF.md), the script will fail.

## Examples
### Example 1
The following script would leave `2` on the stack as the condition (`0`) is false.
```shell
# ASM script
OP_0 OP_NOTIF OP_2 OP_ENDIF

# Raw script
00645268

# Final stack
2
```

### Example 2
The following script would leave `3` on the stack as the condition (`1`) is non-`0`.
```shell
# ASM script
OP_1 OP_NOTIF OP_2 OP_ELSE OP_3 OP_ENDIF

# Raw script
516452675368

# Final stack
3
```
