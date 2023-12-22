# OP_ELSE
:::info
**Opcode number:** 103  
**Byte representation:** `0x67`  
**Short description:** Execute following script if the previous [`OP_IF`](./OP_IF.md) or [`OP_NOTIF`](./OP_NOTIF.md) condition was not met.
:::

[`OP_ELSE`](./OP_ELSE.md) is an essential part of conditional structures in Bitcoin scripting. It allows for alternative execution paths depending on conditions evaluated by preceding [`OP_IF`](./OP_IF.md) or [`OP_NOTIF`](./OP_NOTIF.md) opcodes.

### Operation
1. If the preceding [`OP_IF`](./OP_IF.md) or [`OP_NOTIF`](./OP_NOTIF.md) condition was met (and its script executed), skip the opcodes following [`OP_ELSE`](./OP_ELSE.md) until an [`OP_ENDIF`](./OP_ENDIF.md) is encountered.
2. If the preceding condition was not met, execute the opcodes after [`OP_ELSE`](./OP_ELSE.md) until an [`OP_ENDIF`](./OP_ENDIF.md) is found.

The structure generally appears like so:
```txt
<condition> OP_IF
    <script if condition is true>
OP_ELSE
    <script if condition is false>
OP_ENDIF
```

Or, in conjunction with [`OP_NOTIF`](./OP_NOTIF.md):
```txt
<condition> OP_NOTIF
    <script if condition is false>
OP_ELSE
    <script if condition is true>
OP_ENDIF
```

Where `<condition>` is an operation or value that results in a `0` or non-`0` value on top of the stack.

## Notes
- [`OP_ELSE`](./OP_ELSE.md) is not standalone and must be used within an [`OP_IF`](./OP_IF.md)/[`OP_NOTIF`](./OP_NOTIF.md) and [`OP_ENDIF`](./OP_ENDIF.md) structure.
- A script will fail and not complete if there is no matching [`OP_ENDIF`](./OP_ENDIF.md) for an [`OP_ELSE`](./OP_ELSE.md).

## Examples
### Example 1
The following script leaves `2` on the stack since the condition (`1`) is true in front of an [`OP_IF`](./OP_IF.md)`.
```shell
# ASM script
OP_1 OP_IF OP_2 OP_ELSE OP_3 OP_ENDIF

# Raw script
516352675368

# Final stack
2
```

### Example 2
The following script leaves `3` on the stack since the condition (`1`) is true in front of an [`OP_NOTIF`](./OP_NOTIF.md).
```shell
# ASM script
OP_1 OP_NOTIF OP_2 OP_ELSE OP_3 OP_ENDIF

# Raw script
516452675368

# Final stack
3
```
