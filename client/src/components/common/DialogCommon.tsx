import { PropsWithChildren, ReactElement, ReactNode, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface DialogCommonProps {
    open: boolean,
    onClose: () => void,
    children: ReactNode
}

const DialogCommon: React.FC<DialogCommonProps> = ({ open, onClose, children }): ReactElement => {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-[9999]">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            {children}
        </Dialog >
    )
}

export default DialogCommon;