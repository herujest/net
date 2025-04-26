import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { useSidebar } from '@/sections/Sidebar/hooks';
import { useThemeMode } from '@/theme';

import { useContactsDialog } from './hooks';

function Contacts() {
  const { toggle: toggleTheme } = useThemeMode();
  const { toggle: toggleSidebar } = useSidebar();
  const { isOpen, close, toggle: toggleContactDialog } = useContactsDialog();

  return (
    <Dialog fullWidth maxWidth="xs" onClose={close} open={isOpen} data-pw="contact-dialog">
      <DialogTitle>Get in touch</DialogTitle>
      <DialogContent>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>WhatsApp</Typography>
          <Button color="warning" variant="outlined" onClick={toggleTheme}>
            Message
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>LinkedIn</Typography>
          <Button color="warning" variant="outlined" onClick={toggleSidebar}>
            Connect
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>Instagram</Typography>
          <Button color="warning" variant="outlined" onClick={toggleContactDialog}>
            Follow
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>Email</Typography>
          <Button color="warning" variant="outlined" onClick={toggleContactDialog}>
            Message
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default Contacts;
