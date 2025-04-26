import { useCallback } from 'react';

import { useAtom } from 'jotai';

import { isContactDialogOpenState } from './atoms';

function useContactsDialog() {
  const [isOpen, setIsOpen] = useAtom(isContactDialogOpenState);

  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);

  return {
    isOpen,
    toggle,
    close,
    open,
  };
}

export { useContactsDialog };
