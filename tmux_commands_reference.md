# Tmux Commands Reference Guide

Based on your custom tmux configuration with Ctrl-a prefix.

## Session Management
```bash
tmux                    # Start new tmux session
tmux new -s myname      # Start named session
tmux ls                 # List all sessions
tmux attach -t myname   # Attach to named session
tmux kill-session -t myname  # Kill named session
```

## Your Custom Key Bindings (Prefix = Ctrl-a)

### Basic Navigation:
```
Ctrl-a c        # Create new window
Ctrl-a n        # Next window
Ctrl-a p        # Previous window
Ctrl-a 0-9      # Switch to window number
Ctrl-a w        # List all windows
```

### Your Custom Split Commands:
```
Ctrl-a |        # Split pane vertically (your custom binding)
Ctrl-a -        # Split pane horizontally (your custom binding)
```

### Your Custom Pane Resizing:
```
Ctrl-a h        # Resize pane left (repeatable)
Ctrl-a j        # Resize pane down (repeatable)
Ctrl-a k        # Resize pane up (repeatable)
Ctrl-a l        # Resize pane right (repeatable)
Ctrl-a m        # Toggle pane zoom (maximize/minimize)
```

### Pane Navigation (with vim-tmux-navigator plugin):
```
Ctrl-h          # Move to left pane (works with Neovim too!)
Ctrl-j          # Move to bottom pane
Ctrl-k          # Move to top pane
Ctrl-l          # Move to right pane
```

### Your Custom Config:
```
Ctrl-a r        # Reload tmux config (your custom binding)
```

## Copy Mode (Vi-style, as per your config):
```
Ctrl-a [        # Enter copy mode
v               # Start selecting text (your custom binding)
y               # Copy selected text (your custom binding)
q               # Exit copy mode
Ctrl-a ]        # Paste copied text
```

## Other Useful Commands:
```
Ctrl-a d        # Detach from session (session keeps running)
Ctrl-a x        # Kill current pane
Ctrl-a &        # Kill current window
Ctrl-a $        # Rename session
Ctrl-a ,        # Rename window
Ctrl-a ?        # Show all key bindings
```

## Plugin-Specific (TPM):
```
Ctrl-a I        # Install plugins
Ctrl-a U        # Update plugins
Ctrl-a Alt-u    # Remove unlisted plugins
```

## Mouse Support (enabled in your config):
- **Click** to switch panes
- **Drag** borders to resize panes
- **Right-click** for context menu
- **Mouse wheel** to scroll through history

## Notes:
Your config is really well set up! The vim-tmux-navigator plugin means you can seamlessly move between tmux panes and Neovim splits using the same Ctrl-hjkl keys.