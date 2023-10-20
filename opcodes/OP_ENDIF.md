# OP_ENDIF
:::info
**Opcode number:** 104  
**Byte representation:** `0x68`  
**Short description:** Ends a conditional block.
:::

`OP_ENDIF` is used to conclude conditional structures in Bitcoin scripting initiated by `OP_IF` or `OP_NOTIF`. It denotes the end of the conditional execution paths and allows the script to continue with any subsequent commands outside of the conditional block.

### Operation
1. Continue executing the following opcodes in the script after the `OP_ENDIF`.

Note that `OP_ENDIF` itself does not directly cause any action other than marking the end of the conditional segment. Its presence ensures that the preceding conditional logic (whether that's an `OP_IF`, `OP_NOTIF`, or an accompanying `OP_ELSE`) has been properly closed.

## Notes
- Each `OP_IF` or `OP_NOTIF` must have a corresponding `OP_ENDIF`. Failing to do so will render the script invalid.
- A script can have nested `OP_IF`/`OP_NOTIF` structures, but each of them must be properly closed with their own `OP_ENDIF`.
- A script with an `OP_ENDIF` without a preceding `OP_IF` or `OP_NOTIF` is also invalid.

## Examples
### Example 1
The following script leaves `2` on the stack since the condition (`1`) is true.
```shell
# ASM script
OP_1 OP_IF OP_2 OP_ENDIF

# Raw script
516368

# Final stack
2
```

### Example 2
The following script with nested conditionals leaves `4` on the stack since both conditions (`1`) are true.
```shell
# ASM script
OP_1 OP_IF 
    OP_1 OP_IF 
        OP_4 
    OP_ENDIF
OP_ENDIF

# Raw script
51516351546868

# Final stack
4
```
